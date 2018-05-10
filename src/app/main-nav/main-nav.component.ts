import { Component } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import { Observable, of as observableOf } from "rxjs";
import { NestedTreeControl } from "@angular/cdk/tree";

export type Sport = {
  name: string;
  children: Sport[];
};

@Component({
  selector: "main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"]
})
export class MainNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );
  constructor(private breakpointObserver: BreakpointObserver) {}

  sports: Sport[] = [
    {
      name: "Triathlon",
      children: [
        { name: "Running", children: [] },
        { name: "Cycling", children: [] },
        { name: "Swimming", children: [] }
      ]
    },
    {
      name: "Football",
      children: []
    }
  ];

  treeControl = new NestedTreeControl<Sport>(node =>
    observableOf(node.children)
  );
}
