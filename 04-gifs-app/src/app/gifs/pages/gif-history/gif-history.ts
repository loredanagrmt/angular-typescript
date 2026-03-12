import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { GifService } from '../../service/gifs.service';
import { GifsList } from "../../components/gifs-list/gifs-list";

@Component({
  selector: 'gif-history',
  imports: [GifsList],
  templateUrl: './gif-history.html',
})
export default class GifHistory {

  gifService = inject(GifService)

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query())
  })

}
