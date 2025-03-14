export function formatDate(date: any, local: any) {
  const d = new Date(date)
  const options: any = { year: 'numeric', month: 'short' } // 일자 정보 제거
  // const options: any = { year: 'numeric', month: 'short', day: 'numeric' }

  const res = d.toLocaleDateString(local, options)
  return res
}
