import type {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from '@playwright/test/reporter';

/**
 * Example custom reporter stub — logs pass/fail counts.
 * Enable via `reporter: [['./reporters/example.reporter.ts']]` in playwright.config.ts.
 */
class ExampleReporter implements Reporter {
  private passed = 0;
  private failed = 0;

  onBegin(_config: FullConfig, suite: Suite): void {
    console.log(`[example-reporter] Starting ${suite.allTests().length} tests`);
  }

  onTestEnd(_test: TestCase, result: TestResult): void {
    if (result.status === 'passed') this.passed += 1;
    else if (result.status === 'failed' || result.status === 'timedOut') this.failed += 1;
  }

  onEnd(_result: FullResult): void {
    console.log(`[example-reporter] passed=${this.passed} failed=${this.failed}`);
  }
}

export default ExampleReporter;
