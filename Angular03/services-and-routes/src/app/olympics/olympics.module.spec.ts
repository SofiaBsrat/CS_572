import { OlympicsModule } from './olympics.module';

describe('OlympicsModule', () => {
  let olympicsModule: OlympicsModule;

  beforeEach(() => {
    olympicsModule = new OlympicsModule();
  });

  it('should create an instance', () => {
    expect(olympicsModule).toBeTruthy();
  });
});
