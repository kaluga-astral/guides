module.exports = {
  '**/*.{js,jsx,ts,tsx,md,mdx}': [
    () => 'yaspeller --only-errors',
  ],
};
