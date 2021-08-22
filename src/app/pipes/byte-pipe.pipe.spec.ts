import { BytePipe } from "./byte-pipe.pipe";

describe("BytePipePipe", () => {
  it("create an instance", () => {
    const pipe = new BytePipe();
    expect(pipe).toBeTruthy();
  });
});
