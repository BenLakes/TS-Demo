export const yyyy = 'yyyyy';

const a = 'a'
const b = 'b'
const c = 'c'

export {a, b, c}

// 默认导出
export default function(s: string) {
   return s.length === 5 ? '等于5' : '不等于5'
}