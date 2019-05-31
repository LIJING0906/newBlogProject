/**
 * 自定义指令 stickyBottom
 * 元素离开视口后，添加相应的 class
 */

function handleScroll(el, binding, vnode) {
    const body = document.documentElement || document.body;
    const viewportHeight = body.clientHeight;
    const selfTop = el.getBoundingClientRect().top;
    const selfHeight = el.offsetHeight;
    let klass = binding.value.class;
    if (selfTop + selfHeight - viewportHeight > 0) {
        if (el.classList) {
            el.classList.add(klass);
        } else {
            el.klass += '' + klass;
        }
    } else {
        if (el.classList) {
            el.classList.remove(klass);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + klass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
}

export default {
    inserted(el, binding, vnode) {
        window.addEventListener('scroll', handleScroll.bind(null, el, binding, vnode), false);
        window.addEventListener('resize', handleScroll.bind(null, el, binding, vnode), false);
        // handleScroll(el, binding, vnode);
    },
    unbind() {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
    }
};
