import { useState, useEffect } from "react";

export default function usePokemonForm(onAddPokemon) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [poder, setPoder] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!mensagem) return;
    const timeout = setTimeout(() => setMensagem(""), 3000); // limpa após 3s
    return () => clearTimeout(timeout);
  }, [mensagem]);

  const resetForm = () => {
    setNome("");
    setTipo("");
    setDescricao("");
    setPoder("");
  };

  const validate = () => {
    if (!nome.trim() || !tipo.trim() || !descricao.trim() || poder === "" || poder === null) {
      setErro("⚠️ Preencha todos os campos!");
      setMensagem("");
      return false;
    }

    const numericPower = Number(poder);
    if (Number.isNaN(numericPower) || numericPower < 0 || numericPower > 100) {
      setErro("⚠️ Poder deve ser um número entre 0 e 100.");
      setMensagem("");
      return false;
    }

    setErro("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const novoPokemon = {
      nome: nome.trim(),
      tipo,
      descricao: descricao.trim(),
      poder: Number(poder),
      criadoEm: new Date().toISOString()
    };

    try {
      const pokemonsAtuais = JSON.parse(localStorage.getItem('pokemons')) || [];

      const novaLista = [...pokemonsAtuais, novoPokemon];

      localStorage.setItem('pokemons', JSON.stringify(novaLista));

    } catch (error) {
        console.error("Falha ao salvar no localStorage", error);
        setErro("Ocorreu um erro ao salvar o Pokémon.");
        return;
    }

    if (typeof onAddPokemon === "function") {
      onAddPokemon(novoPokemon);
    }

    setMensagem("✅ Pokémon cadastrado com sucesso!");
    setErro("");
    resetForm();
    window.location.reload()
  };

  return {
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
    handleSubmit,
    resetForm
  };
}
