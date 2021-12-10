import { applyTransform, createSVGElement, mount } from './utils';

export function transform(type, context, ...params) {
  const { group } = context;
  applyTransform(group, `${type}(${params.join(', ')})`);
}

export function restore(context) {
  const { group } = context;
  const { parentNode } = group;
  context.group = parentNode;
}

export function save(context) {
  const { group } = context;
  const newGroup = createSVGElement('g');
  mount(group, newGroup);
  context.group = newGroup;
}

export function scale(context, sx, sy) {
  transform('scale', context, sx, sy);
}

export function translate(context, x, y) {
  transform('translate', context, x, y);
}

export function rotate(context, theta) {
  transform('rotate', context, theta);
}
