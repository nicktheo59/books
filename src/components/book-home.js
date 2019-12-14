/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';

import './book-image.js';

class BookHome extends LitElement {
  _render() {
    return html`
      <style>
        :host {
          display: block;
        }

        .niki {
          height: 300px;
          max-width: 570px;
          margin: 0 auto;
        }

        .books-desc {
          padding: 24px 16px 0;
          text-align: center;
        }

        /* Wide Layout */
        @media (min-width: 648px) {
          .books-desc {
            padding: 96px 16px 0;
          }
        }
      </style>

      <book-image class="niki" alt="Books Home" center src="images/niki.png" placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAAI0lEQVR4AWPw2v7Wfe1Dj7X3/Pd8YPDf+Uqva79x38GQvW8Bu0sOexptskUAAAAASUVORK5CYII="></book-image>

      <div class="books-desc">Right now you can use this to search the world's most comprehensive index of full-text books.</div>
      <div class="books-desc">In the coming months I will be swapping out this app's back-end API to instead retrieve full transcripts of Youtube videos relevant to your search query</div>
      <div class="books-desc">The idea is that you can more efficiently scan-read whether a 40-minute long video is actually going to give you the answers you need - rather than just steal your attention for advertising purposes.</div>
      <div class="books-desc">After that, the plan is to basically create the AskJeeves of Video content - ultimately all 82 years worth that is now uploaded every day!</div>
      <div class="books-desc">In fact, after you use the service enough we will generate comprehension questions and suggest them for you using an AI technique called Teacher Forcing.</div>
      <div class="books-desc">And if the project *really* takes off we'll make your target search space customisible and teach it to compare and contrast conflicting passages of text, or at least highlight the discrepencies to bring to your attention.</div>
      <div class="books-desc">This idea was inspired by the folks at Bloomsbury AI, David Homer at HP who wanted to be able to just 'ask LinkedIn questions', and of course ME - who has little patience to sit through another obnoxious time-lapse montage or Grammerly advert. My spelling is good-enough you bastards!</div>
      <div class="books-desc"> If any VC out there would like to receive progress updates during this early dev phase - please send an email to nt@ntech.org.uk </div>
    `;
  }
}

window.customElements.define('book-home', BookHome);
