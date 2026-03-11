import { Gif } from "../interface/gif.inteface";
import { KlipyItem } from "../interface/klipy.interfaces";

export class GifMapper {

  static mapKlipyItemToGit(item: KlipyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.file.md['gif'].url,
    }
  }

  static mapKlipyItemsToGifArray(items: KlipyItem[]): Gif[] {
    return items.map(this.mapKlipyItemToGit)
  }

}
