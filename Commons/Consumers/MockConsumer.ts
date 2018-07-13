import { Paths } from './PathsEnums';
import { Ajax } from '../../Tools/Ajax';
export class MockConsumer extends Ajax implements iConsumer {
  public get() {}
  public async show(id: Number) {
    const mockPath = Paths.mock + '/' + id;
    const json = await this.fetchData(mockPath);
    console.log(json.content.rendered);
    return json;
  }
}
