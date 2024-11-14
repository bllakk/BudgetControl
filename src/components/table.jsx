import { Table } from "@chakra-ui/react"



function calculateSaldos(items) {
  let previousSaldo = 0;

  return items.map((item, index) => {
    const entrada = parseFloat(item.entrada) || 0;
    const saida = parseFloat(item.saida) || 0;
    const diario = parseFloat(item.diario) || 0;

    const saldo = index === 0
      ? entrada - (saida + diario) // Primeira linha
      : previousSaldo + entrada - (saida + diario); // Linhas subsequentes

    previousSaldo = saldo; // Atualiza o saldo anterior para a próxima linha

    return { ...item, saldo: saldo.toFixed(2) }; // Adiciona o saldo calculado ao item
  });
}


export default function NewTable() {
  // Calcula os saldos antes de renderizar a tabela
  const itemsWithSaldo = calculateSaldos(items);

  return (
      <Table size="sm" variant="outline">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Data</Table.Th>
            <Table.Th>Entrada</Table.Th>
            <Table.Th>Saída</Table.Th>
            <Table.Th>Diário</Table.Th>
            <Table.Th textAlign="end">Saldo</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Body>
          {itemsWithSaldo.map((item) => (
            <Table.Tr key={item.id}>
              <Table.Td>{item.id}</Table.Td>
              <Table.Td>{item.entrada || "—"}</Table.Td>
              <Table.Td>{item.saida || "—"}</Table.Td>
              <Table.Td>{item.diario || "—"}</Table.Td>
              <Table.Td textAlign="end">{item.saldo}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Body>
      </Table>
  );
}


const items = [
    { id: 1, entrada: 1000, saida: 200  , diario: 150, saldo: "" },
    { id: 2, entrada: "", saida: 50, diario: 150, saldo: ""},
    { id: 3, entrada: 500, saida: 500, diario: 150, saldo: ""},
    { id: 4, entrada: "", saida: "", diario: 150, saldo: ""},
    { id: 5, entrada: 5000, saida: 10, diario: 150, saldo: ""},
  ]