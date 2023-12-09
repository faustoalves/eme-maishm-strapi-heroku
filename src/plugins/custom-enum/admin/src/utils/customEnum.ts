type SelectItem = {
  label: string;
  value: string;
};

type SelectGroup = {
  label: string;
  placeholder: string;
  defaultValue: string;
  items: SelectItem[];
};

export const CustomEnumMap: Map<string, SelectGroup> = new Map([
  [
    "midias-sociais",
    {
      label: "Mídias Sociais",
      placeholder: "Escolha o icone",
      defaultValue: "whatsapp",
      items: [
        {
          label: "Facebook",
          value: "facebook",
        },
        {
          label: "Instagram",
          value: "instagram",
        },
        {
          label: "LinkedIn",
          value: "linkedin",
        },
        {
          label: "Pinterest",
          value: "pinterest",
        },
        {
          label: "YouTube",
          value: "youtube",
        },
        {
          label: "WhatsApp",
          value: "whatsapp",
        },
      ],
    },
  ],
  [
    "perguntas-frequentes",
    {
      label: "Perguntas Frequentes",
      placeholder: "Escolha o icone",
      defaultValue: "telefone",
      items: [
        {
          label: "Telefone",
          value: "telefone",
        },
        {
          label: "Pagamento",
          value: "pagamento",
        },
        {
          label: "Porcentagem",
          value: "porcentagem",
        },
        {
          label: "Financiamento",
          value: "financiamento",
        },
        {
          label: "Construção",
          value: "construcao",
        },
        {
          label: "Pronto",
          value: "pronto",
        },
        {
          label: "Vistoria",
          value: "vistoria",
        },
        {
          label: "Outros Assuntos",
          value: "outros-assuntos",
        },
      ],
    },
  ],
  [
    "status-obra",
    {
      label: "Status de Obra",
      placeholder: "Escolha o status",
      defaultValue: "breve-lancamento",
      items: [
        {
          label: "Breve Lançamento",
          value: "breve-lancamento",
        },
        {
          label: "Em construção",
          value: "construcao",
        },
        {
          label: "Lançamento",
          value: "lancamento",
        },
        {
          label: "Pronto",
          value: "pronto",
        },
      ],
    },
  ],
  [
    "status-venda",
    {
      label: "Status de Venda",
      placeholder: "Escolha o status",
      defaultValue: "disponivel",
      items: [
        {
          label: "Disponivel",
          value: "disponivel",
        },
        {
          label: "Vendidos",
          value: "vendidos",
        },
      ],
    },
  ],
  [
    "destaque-produtos",
    {
      label: "Destaque de Produtos",
      placeholder: "Escolha o produto",
      defaultValue: "alameda",
      items: [
        {
          label: "Alameda",
          value: "alameda",
        },
        {
          label: "Ar Condicionado",
          value: "ar-condicionado",
        },
        {
          label: "Bar",
          value: "bar",
        },
        {
          label: "Beach Tennis",
          value: "beach-tennis",
        },
        {
          label: "Churrasqueira",
          value: "churrasqueira",
        },
        {
          label: "Convêniencia",
          value: "conveniencia",
        },
        {
          label: "Cozinha",
          value: "cozinha",
        },
        {
          label: "Coworking",
          value: "coworking",
        },
        {
          label: "Escritório",
          value: "escritorio",
        },
        {
          label: "Fachada",
          value: "fachada",
        },
        {
          label: "Fitness",
          value: "fitness",
        },
        {
          label: "Games",
          value: "games",
        },
        {
          label: "Gourmet",
          value: "gourmet",
        },
        {
          label: "Jogos",
          value: "jogos",
        },
        {
          label: "Metragem",
          value: "metragem",
        },
        {
          label: "Minha Casa Minha Vida",
          value: "mcmv",
        },
        {
          label: "PCD",
          value: "pcd",
        },
        {
          label: "Piscina",
          value: "piscina",
        },
        {
          label: "Playground",
          value: "playground",
        },
        {
          label: "Pomar",
          value: "pomar",
        },
        {
          label: "Portaria",
          value: "portaria",
        },
        {
          label: "Quadra",
          value: "quadra",
        },
        {
          label: "Quartos",
          value: "quartos",
        },
        {
          label: "Pet",
          value: "pet",
        },
        {
          label: "Sala de TV",
          value: "sala-tv",
        },
        {
          label: "Sala de Jantar",
          value: "sala-jantar",
        },
        {
          label: "Salão de Festas",
          value: "sala-festas",
        },
      ],
    },
  ],
  [
    "tipo-empreendimento",
    {
      label: "Tipo de Empreendimento",
      placeholder: "Escolha o tipo",
      defaultValue: "apartamento",
      items: [
        {
          label: "Apartamento",
          value: "apartamento",
        },
        {
          label: "Casa",
          value: "casa",
        },
        {
          label: "Terreno",
          value: "terreno",
        },
      ],
    },
  ],
  [
    "marcas",
    {
      label: "Marcas",
      placeholder: "Escolha a marca",
      defaultValue: "smart",
      items: [
        {
          label: "HM Smart",
          value: "smart",
        },
        {
          label: "HM Intense",
          value: "intense",
        },
        {
          label: "HM Maxi",
          value: "maxi",
        },
        {
          label: "HM Select",
          value: "select",
        },
        {
          label: "HM Vanguard",
          value: "vanguard",
        },
      ],
    },
  ],
]);
