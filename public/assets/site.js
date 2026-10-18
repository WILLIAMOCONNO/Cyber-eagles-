document.documentElement.classList.add('js');

const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
const archive = document.querySelector('.archive-menu');
const closeMenu = () => {
  menu?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('open');
};
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (archive?.open) { archive.open = false; archive.querySelector('summary').focus(); }
    if (menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
  }
});
document.addEventListener('click', event => {
  if (archive?.open && !archive.contains(event.target)) archive.open = false;
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
matchMedia('(min-width: 981px)').addEventListener('change', closeMenu);

const stages = [
  ['01 / UNDERSTAND', 'Work out what the robot needs to do.', 'Start with the game objectives, then break them into tasks: moving around the field, reaching a scoring position, and picking up samples or specimens.', 'A useful starting question: what movement or mechanism does this task need?'],
  ['02 / DESIGN & BUILD', 'Make something we can test.', 'Choose components and build a working mechanism. Our first-season examples include the Viper slide and our custom 3D-printed Cyber Claw.', 'A design on paper still needs to work on the robot.'],
  ['03 / PROGRAM & TEST', 'Watch what actually happens.', 'Program movement in Blocks, use encoder feedback, and inspect telemetry. Test the robot with its mechanisms attached, because reach and weight change how it behaves.', 'Compare the intended movement with the result.'],
  ['04 / IMPROVE', 'Change the part that needs it.', 'Our balance experiments included repurposed hitches as counterweights. The notebook also identified a narrower body and limits on arm extension as improvements to explore.', 'Record the problem and decide what to try next.']
];
const steps = [...document.querySelectorAll('[data-step]')];
function selectStep(tab) {
  steps.forEach(button => {
    const selected = button === tab;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  const stage = stages[Number(tab.dataset.step)];
  ['stage','step-title','step-copy','step-takeaway'].forEach((id, i) => { document.getElementById(id).textContent = stage[i]; });
  document.getElementById('process-panel').setAttribute('aria-labelledby', tab.id);
}
function bindTabs(tabs, select) {
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (i + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (i + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); select(tabs[next]); tabs[next].focus(); }
    });
  });
}
bindTabs(steps, selectStep);
document.querySelectorAll('.portfolio-tabs').forEach(tablist => {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  bindTabs(tabs, tab => tabs.forEach(button => {
    const selected = button === tab;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
    document.getElementById(button.getAttribute('aria-controls')).hidden = !selected;
  }));
});

const filters = [...document.querySelectorAll('[data-filter]')];
const photos = [...document.querySelectorAll('[data-category]')];
if (filters.length) {
  const status = document.createElement('p');
  status.className = 'sr-only';
  status.setAttribute('role', 'status');
  document.querySelector('.filters').after(status);
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(filter => {
      filter.classList.toggle('active', filter === button);
      filter.setAttribute('aria-pressed', String(filter === button));
    });
    photos.forEach(photo => { photo.hidden = button.dataset.filter !== 'all' && photo.dataset.category !== button.dataset.filter; });
    const count = photos.filter(photo => !photo.hidden).length;
    status.textContent = `${count} reference ${count === 1 ? 'photo' : 'photos'} shown.`;
  }));
}
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  document.querySelectorAll('.zoom').forEach(button => button.addEventListener('click', () => {
    const image = button.querySelector('img');
    const expanded = document.getElementById('expanded');
    expanded.src = image.src;
    expanded.alt = image.alt;
    document.getElementById('caption').textContent = button.dataset.caption;
    lightbox.showModal();
  }));
  document.getElementById('close-dialog').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
      const bounds = lightbox.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
    }
  });
}
