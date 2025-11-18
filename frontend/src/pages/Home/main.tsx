/**
 * @page HomePage
 * @summary Home page displaying welcome message and system overview
 * @domain core
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none
 */
export const HomePage = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Bem-vindo ao StockBox</h2>
      <p className="text-lg text-gray-600 mb-8">Sistema de Controle de Estoque</p>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <p className="text-gray-700">
          Gerencie suas movimentações de estoque de forma eficiente. Registre entradas, saídas e
          acompanhe o histórico completo de todos os itens.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
