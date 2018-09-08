"use strict";

import { Component } from "can";

export default Component.extend({
  tag: "page-comp",
  view: `<h1>{{name}}</h1>`,
  ViewModel: {
    name: "string"
  }
});
