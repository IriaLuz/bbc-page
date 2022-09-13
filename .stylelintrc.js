module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-prettier/recommended",
  ],
  "ignoreFiles": [
    "node_modules/**/*.css",
    "out/**/*.css",
    "coverage/**/*",
    ".next/**/*.css",
  ],
  "plugins": ["stylelint-prettier", "stylelint-scss"],
  "rules": {
    "string-quotes": "double",
    "prettier/prettier": true,
    "selector-class-pattern": null,
    "declaration-block-no-redundant-longhand-properties": null,
  },
};
