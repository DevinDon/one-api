const REG_EDITOR_EMAIL = /\s(.*)[）|$]/;
const REG_EDITOR_NAME = /责任编辑：(.+?)[\s|）|$]/;

export const parseEditorEmail = (text: string) =>
  REG_EDITOR_EMAIL.test(text) ? REG_EDITOR_EMAIL.exec(text)![1] : '';

export const parseEditorName = (text: string) =>
  REG_EDITOR_NAME.test(text) ? REG_EDITOR_NAME.exec(text)![1] : '';
