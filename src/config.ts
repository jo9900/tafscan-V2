if (!localStorage.getItem('locale')) {
  if (navigator.language === 'zh' || navigator.language === 'zh-CN') {
    window.localStorage.setItem('locale', 'zh')
  } else {
    window.localStorage.setItem('locale', 'en')
  }
}
export const currentLocale = localStorage.getItem('locale') || 'en'
export const unit = 'TAFT'
export const unitUSD = 'USD'
