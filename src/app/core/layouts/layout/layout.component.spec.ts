import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { hexToRgb } from 'src/utils';

import { LayoutComponent } from './layout.component';

@Component({
  selector: 'test-container',
  template: `<app-layout>Hello</app-layout>`
})
export class TestContainerComponent {
}

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent, TestContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist a container', () => {
    const layoutContainer = fixture.debugElement.query(By.css('[data-test="layout-container"]'));
    expect(layoutContainer).toBeTruthy();
  });
  
  it('Container should have color #F6F6F6', () => {
    const layoutContainer = fixture.debugElement.query(By.css('[data-test="layout-container"]'));
    const layoutBgColor = window.getComputedStyle(layoutContainer.nativeElement).backgroundColor;

    expect(layoutBgColor).toBe(hexToRgb("#F6F6F6"));
  });

  it('Container should have elipse figure 1 inside', () => {
    const elipse1 = fixture.debugElement.query(By.css('[data-test="layout-container"] [data-test="elipse-1"]'));

    expect(elipse1).toBeTruthy();
  });

  it('Container should have elipse figure 2 inside', () => {
    const elipse2 = fixture.debugElement.query(By.css('[data-test="layout-container"] [data-test="elipse-2"]'));

    expect(elipse2).toBeTruthy();
  });

  it('Elipse figure 1 should have his image as background', () => {
    const elipse1 = fixture.debugElement.query(By.css('[data-test="elipse-1"]'));

    expect(window.getComputedStyle(elipse1.nativeElement).backgroundImage).toContain("/assets/elipse-one.png")
  });

  it('Elipse figure 1 should have his image as background', () => {
    const elipse2 = fixture.debugElement.query(By.css('[data-test="elipse-2"]'));

    expect(window.getComputedStyle(elipse2.nativeElement).backgroundImage).toContain("/assets/elipse-two.png")
  });

  it('Elipse figure 1 should have width 100 and height 200', () => {
    const elipse1 = fixture.debugElement.query(By.css('[data-test="elipse-1"]'));

    expect(window.getComputedStyle(elipse1.nativeElement).width).toBe("100px");
    expect(window.getComputedStyle(elipse1.nativeElement).height).toBe("200px");
  });

  it('Elipse figure 2 should have width 200 and height 100', () => {
    const elipse2 = fixture.debugElement.query(By.css('[data-test="elipse-2"]'));

    expect(window.getComputedStyle(elipse2.nativeElement).width).toBe("200px");
    expect(window.getComputedStyle(elipse2.nativeElement).height).toBe("100px");
  });

  it('Elipse figure 1 background should not repeat', () => {
    const elipse1 = fixture.debugElement.query(By.css('[data-test="elipse-1"]'));

    expect(window.getComputedStyle(elipse1.nativeElement).backgroundRepeat).toBe("no-repeat");
  });

  it('Elipse figure 2 background should not repeat', () => {
    const elipse2 = fixture.debugElement.query(By.css('[data-test="elipse-2"]'));

    expect(window.getComputedStyle(elipse2.nativeElement).backgroundRepeat).toBe("no-repeat");
  });

  it('Elipse figure 1 should be in the left top corner', () => {
    const elipse1 = fixture.debugElement.query(By.css('[data-test="elipse-1"]'));

    expect(window.getComputedStyle(elipse1.nativeElement).position).toBe("absolute");
    expect(window.getComputedStyle(elipse1.nativeElement).left).toBe("0px");
    expect(window.getComputedStyle(elipse1.nativeElement).right).toBe("0px");
  });

  it('Elipse figure 2 should be in the left top corner', () => {
    const elipse2 = fixture.debugElement.query(By.css('[data-test="elipse-2"]'));

    expect(window.getComputedStyle(elipse2.nativeElement).position).toBe("absolute");
    expect(window.getComputedStyle(elipse2.nativeElement).left).toBe("0px");
    expect(window.getComputedStyle(elipse2.nativeElement).right).toBe("0px");
  });

  it('ng-content should work on layout component', () => {
    const testFixture = TestBed.createComponent(TestContainerComponent);

    const layout = testFixture.debugElement.query(By.css('app-layout'));

    expect(layout.nativeElement.textContent).toBe("Hello");
  });
});
