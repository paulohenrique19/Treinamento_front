import { useCart } from "../../../../contexts/CartContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, FormContainer, Input, Button, CartContainer, CartItem } from "./styles";
import { useState, useEffect } from "react";

export const AddressSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  rua: z.string().min(1, "Rua é obrigatória"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  cep: z.string().min(1, "CEP é obrigatório"),
});

export type AddressFormData = z.infer<typeof AddressSchema>;

export const FormAddress = () => {
  const { state, dispatch } = useCart();
    const [cartQuantities, setCartQuantities] = useState<{ [key: string]: number }>({});

  const { register, handleSubmit, formState: { errors } } = useForm<AddressFormData>({
    resolver: zodResolver(AddressSchema),
  });

  useEffect(() => {
    const initialQuantities: { [key: string]: number } = {};
    state.items.forEach(item => {
      initialQuantities[item.produto.id] = item.quantidade;
    });
    setCartQuantities(initialQuantities);
  }, [state.items]);  

  const onSubmit = (data: AddressFormData) => {
    console.log("Endereço enviado: ", data);
  };

  const handleAddItem = (item: any) => {
    dispatch({ type: "UPDATE_ITEM", produtoId: item.produto.id, quantidade: cartQuantities[item.produto.id] + 1 });
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.produto.id]: (prevQuantities[item.produto.id] || 0) + 1,
    }));
  };

  const handleRemoveItem = (item: any) => {
    if (cartQuantities[item.produto.id] === 1) {
      dispatch({ type: "REMOVE_ITEM", produtoId: item.produto.id });
    } else {
      dispatch({ type: "UPDATE_ITEM", produtoId: item.produto.id, quantidade: cartQuantities[item.produto.id] - 1 });
    }
  
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.produto.id]: (prevQuantities[item.produto.id] || 0) - 1,
    }));
  };
  

  return (
    <Container>
      <FormContainer>
        <h2>Endereço de Entrega</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Nome Completo"
            {...register("nome", { required: true })}
          />
          {errors.nome && <span>Nome é obrigatório</span>}

          <Input
            type="text"
            placeholder="Rua"
            {...register("rua", { required: true })}
          />
          {errors.rua && <span>Rua é obrigatória</span>}

          <Input
            type="text"
            placeholder="Cidade"
            {...register("cidade", { required: true })}
          />
          {errors.cidade && <span>Cidade é obrigatória</span>}

          <Input
            type="text"
            placeholder="CEP"
            {...register("cep", { required: true })}
          />
          {errors.cep && <span>CEP é obrigatório</span>}

          <Button type="submit">Confirmar Endereço</Button>
        </form>
      </FormContainer>

      <CartContainer>
        <h2>Itens no Carrinho</h2>
        {state.items.map(item => (
          <CartItem key={item.produto.id}>
            <img src={item.produto.imagemUrl} alt={item.produto.nome} />
            <div>
              <p>{item.produto.nome}</p>
              <span>Quantidade: {cartQuantities[item.produto.id] || 0}</span> {/* Exibe a quantidade do item */}
              <span>R$ {item.produto.preco.toFixed(2)}</span>
              <span onClick={() => handleAddItem(item)}>Adicionar</span>
              <span onClick={() => handleRemoveItem(item)}>Remover</span>
            </div>
          </CartItem>
        ))}
        Preço total: R$ {state.totalValue.toFixed(2)}
      </CartContainer>
    </Container>
  );
};

export default FormAddress;
