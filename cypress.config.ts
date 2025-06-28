import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { defineConfig } from "cypress";
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild'
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

export default defineConfig({
  e2e: {
    specPattern: "cypress/system/**/*.feature",
    setupNodeEvents(on, config) {

      addCucumberPreprocessorPlugin(on, config)

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )
      return config;
    },
  },
});
