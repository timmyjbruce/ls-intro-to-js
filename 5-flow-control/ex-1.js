false || (true && false); // false, the brackets could be removed too
true || (1 + 2); // true, statement short circuits as first operand of 'or' operator is true
(1 + 2) || true; // 3, statement short circuits as first operand of or operator is truthy
true && (1 + 2); // 3, both statements truthy, second operand is returned
false && (1 + 2); // false, 'and' operator short cirtcuits as first operand is false.
(1 + 2) && true; // true, both statements truthy, second operand is returned
(32 * 4) >= 129; // false, left operand is less-than right operand
false !== !true; // false, double negative, both 'not' operators negates each other.
true === 4; // false, strict equality operand requires same datatype
false === (847 === '847'); // true, sub comparison resolved to false due to strict operator ad then false = false resolves to true 
false === (847 == '847');  // false, inverse of above due to loose eqaility operator.
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true, all comparions are via or, therefore the single true comparison returns

// false || ( false === 20) || (82 === 82) || false;

// false || false || true || false