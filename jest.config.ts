import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.test.{tsx,ts}'],
  collectCoverage: true,
  testEnvironment: 'jsdom',
}

export default config