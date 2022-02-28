import { exit } from 'process';
import * as readline from 'readline';
import PlaPensions from './PlaPensions';
import PlaPensionsPersonaFisica from './PlaPensionsPersonaFisica';
import PlaPensionsEmpresa from './PlaPensionsEmpresa';
import IrpfTaxes from './IrpfTaxes';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const plansPensions: PlaPensions[] = [];

let ingressos:number = 0;

const calcularDesgrabat = () => {
  const totalIRPF = IrpfTaxes.calcTax(ingressos);
  let totalADesgravar = 0;
  plansPensions.forEach((pla: PlaPensions) => {
    totalADesgravar += pla.getAportacio();
  });
  const totalIRPFDesgravat = IrpfTaxes.calcTax(ingressos - totalADesgravar);
  const desgravat = totalIRPF - totalIRPFDesgravat;
  rl.write(`Els diners desgrabats son: ${desgravat}`);
  rl.close();
};

const preguntarAportacio = (index: number = 0) => {
  const pla = plansPensions[index];
  if (pla === undefined) {
    calcularDesgrabat();
    return;
  }
  rl.question(`Aportacio del pla de pensions ${pla.getNom()}: `, (answerAportacio: string) => {
    pla.setAportacio(parseFloat(answerAportacio.trim()));
    preguntarAportacio(index + 1);
  });
};

const preguntarIngressos = () => {
  rl.question('Ingressos d\'aquest any: ', (answerIngressos: string) => {
    ingressos = parseFloat(answerIngressos.trim());
    preguntarAportacio();
  });
};

rl.question(`
Quin pla de pensions vols realitzar?\n
1.Pla de pensions persona física\n
2.Pla de pensions empresarial\n
3.Tots dos\n`, (answerPla: string) => {
  switch (answerPla.trim()) {
    case '1':
      plansPensions.push(new PlaPensionsPersonaFisica());
      break;
    case '2':
      plansPensions.push(new PlaPensionsEmpresa());
      break;
    case '3':
      plansPensions.push(new PlaPensionsPersonaFisica());
      plansPensions.push(new PlaPensionsEmpresa());
      break;
    default:
      rl.write('Opció incorrecte');
      exit();
  }
  preguntarIngressos();
});
