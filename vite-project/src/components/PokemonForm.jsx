import usePokemonForm from "../hooks/usePokemonForm";
import "./PokemonForm.css";

function PokemonForm({ onAddPokemon }) {
  const {
    nome,
    setNome,
    tipo,
    setTipo,
    descricao,
    setDescricao,
    poder,
    setPoder,
    mensagem,
    erro,
    handleSubmit
  } = usePokemonForm(onAddPokemon);

  return (
    <form className="pokemon-form" onSubmit={handleSubmit} noValidate>
      <label>Nome do Pokémon:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Ex: Pikachu"
        required
      />

      <label>Tipo:</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
        <option value="">Selecione o tipo</option>
        <option value="🔥 Fogo">🔥 Fogo</option>
        <option value="💧 Água">💧 Água</option>
        <option value="🌱 Grama">🌱 Grama</option>
        <option value="⚡ Elétrico">⚡ Elétrico</option>
        <option value="🧠 Psíquico">🧠 Psíquico</option>
        <option value="🪨 Pedra">🪨 Pedra</option>
      </select>

      <label>Descrição:</label>
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descreva o Pokémon..."
        required
      />

      <label>Poder (0 a 100):</label>
      <input
        type="number"
        min="0"
        max="100"
        value={poder}
        onChange={(e) => setPoder(e.target.value)}
        required
      />

      <button type="submit">Cadastrar Pokémon</button>

      {mensagem && <p className="sucesso">{mensagem}</p>}
      {erro && <p className="erro">{erro}</p>}
    </form>
  );
}

export default PokemonForm;
