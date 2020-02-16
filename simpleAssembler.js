function simple_assembler(program) {
  /* return a dictionary with the registers */
  const register = {};
  let currentInstruction = 0;
  const mov = (a, b) => {
    if (isNaN(Number(b))) {
      register[a] = register[b];
      return currentInstruction++;
    }
    register[a] = Number(b);
    currentInstruction++;
  };

  const inc = a => {
    register[a] = register[a] + 1;
    currentInstruction++;
  };

  const dec = a => {
    register[a] = register[a] - 1;
    currentInstruction++;
  };

  const jnz = (a, step) => {
    if (register[a] !== 0) {
      currentInstruction += Number(step);
    } else {
      currentInstruction++;
    }
  };

  const opCodes = {
    mov,
    inc,
    dec,
    jnz
  };

  const decode = str => {
    let currentOperation = str.split(' ');
    return currentOperation;
  };

  while (currentInstruction < program.length) {
    let op = decode(program[currentInstruction]);
    opCodes[op[0]](op[1], op[2]);
  }

  return register;
}

// console.log(
//   simple_assembler(['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a']),
//   {'a': 1}
// );

console.log(
  simple_assembler(['mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2']),
  { a: 0, b: -20 }
);

// radekk, shivam_jackson solution
// const asm = {};

// init = () => {
//   asm.ip = 0;
//   asm.regs = {};
// }

// asm.code = {
//   mov: (x, y) => asm.regs[x] = isNaN(+y) ? +asm.regs[y] : +y,
//   inc: (x) => asm.regs[x]++,
//   dec: (x) => asm.regs[x]--,
//   jnz: (x, y) => (asm.regs[x] !== 0 ? asm.ip += +y - 1 : false)
// };

// function simple_assembler(program) {
//   init();
//   let params = [];

//   while (asm.ip < program.length) {
//     params = program[asm.ip].split(' ');
//     asm.code[params[0]].apply(null, params.slice(1));

//     asm.ip++;
//   }

//   return asm.regs;
// }
