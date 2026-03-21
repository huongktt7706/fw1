import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ServiceProducts } from "./service-products";

describe("ServiceProducts", () => {
  let component: ServiceProducts;
  let fixture: ComponentFixture<ServiceProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
