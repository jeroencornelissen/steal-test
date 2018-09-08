"use strict";

import { Component, value } from "can";

export default Component.extend({
  tag: "my-app",
  view: `<div>
    <button on:click="loadPage('one')">Page One</button>
    <button on:click="loadPage('two')">Page Two</button>
  </div><hr />
  <div class="page-container">{{{page}}}</div>`,
  ViewModel: {
    page: "*",
    loadPage(page) {
      const path = `~/config/dashboard/page-${page}.js?c=${new Date().getTime()}`;
      console.log(path);

      window.steal.import(path).then(moduleData => {
        console.log("loaded", moduleData.default);
        this.page = new moduleData.default.component({
          viewModel: {
            name: moduleData.default.name
          }
        });
      });
    }
  }
});
