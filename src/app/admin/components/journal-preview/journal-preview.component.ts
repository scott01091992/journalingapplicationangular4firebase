import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ReviewService } from './../../../services/review.service';


@Component({
  selector: 'app-journal-preview',
  templateUrl: './journal-preview.component.html',
  styleUrls: ['./journal-preview.component.sass']
})
export class JournalPreviewComponent implements OnInit {

  @Input('entry') entry;

  base64Img = "";

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {

    function _arrayBufferToBase64( buffer ) {
      var binary = '';
      var bytes = new Uint8Array( buffer );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
          binary += String.fromCharCode( bytes[ i ] );
      }
      return window.btoa( binary );
    }

    let base64 = _arrayBufferToBase64(this.entry.img.data.data);

    this.base64Img = "data:image/jpg;base64, " + base64;

  }

}
