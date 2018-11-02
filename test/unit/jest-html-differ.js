import { toMatchSnapshot } from 'jest-snapshot';
import HtmlDiffer from 'html-differ';
import logger from 'html-differ/lib/logger';
import expect from 'expect';


export function sameHtmlAs(a, b, options) {
  const differ = new HtmlDiffer.HtmlDiffer(options);
  let jestMsg;
  try {
    jestMsg = options.jestMsg;
  } catch (e) {
    jestMsg = diffLog => `HTML doesn't match:\n${diffLog}`;
  }
  const diff = differ.diffHtml(a, b);
  const pass = diff.length === 1;
  return {
    pass,
    message: () => jestMsg(logger.getDiffText(diff)),
  };
}

export function sameHtmlAsSnapshot() {
  const html = Array.prototype.shift.apply(arguments);
  const snapshot = toMatchSnapshot.apply(this, arguments);
  const jestMsg = diffLog => `${snapshot.message().split('\n')[2]}\n${diffLog}`;

  const result = sameHtmlAs(html, snapshot.expected, { jestMsg });
  return result;
}


expect.extend({
  sameHtmlAs,
  sameHtmlAsSnapshot,
});