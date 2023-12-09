import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginPkg from "../../package.json";
import PluginIcon from "./components/PluginIcon";
import pluginId from "./pluginId";

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: "custom-enum",
      pluginId: "custom-enum",
      type: "string",
      intlLabel: {
        id: "custom-enum.text-ai.label",
        defaultMessage: "Custom Enum",
      },
      intlDescription: {
        id: "custom-enum.text-ai.description",
        defaultMessage: "Solution for Enum Lists",
      },
      icon: PluginIcon,
      components: {
        Input: async () =>
          import(
            /* webpackChunkName: "input-component" */ "./components/Input"
          ),
      },
      options: {
        base: [
          {
            intlLabel: {
              id: "custom-enum.enumType.label",
              defaultMessage: "Choose enum type",
            },
            // description: {
            //   id: "custom-enum.enumType.description",
            //   defaultMessage: "Do you need more or less features?",
            // },
            name: "options.enumType",
            type: "select",
            options: [
              {
                key: "midias-sociais",
                value: "midias-sociais",
                metadatas: {
                  intlLabel: {
                    id: "custom-enum.enumType.midias-sociais.label",
                    defaultMessage: "Mídias Sociais",
                  },
                },
              },
              {
                key: "perguntas-frequentes",
                value: "perguntas-frequentes",
                metadatas: {
                  intlLabel: {
                    id: "custom-enum.enumType.perguntas-frequentes.label",
                    defaultMessage: "Perguntas Frequentes",
                  },
                },
              },
              {
                key: "status-obra",
                value: "status-obra",
                metadatas: {
                  intlLabel: {
                    id: "custom-enum.enumType.status-obra.label",
                    defaultMessage: "Status da obra",
                  },
                },
              },
              {
                key: "status-venda",
                value: "status-venda",
                metadatas: {
                  intlLabel: {
                    id: "custom-enum.enumType.status-venda.label",
                    defaultMessage: "Status de Venda",
                  },
                },
              },
              {
                key: "destaque-produtos",
                value: "destaque-produtos",
                metadatas: {
                  intlLabel: {
                    id: "custom-enum.enumType.destaque-produtos.label",
                    defaultMessage: "Destaque de produtos",
                  },
                },
              },
              {
                key: "tipo-empreendimento",
                value: "tipo-empreendimento",
                metadatas: {
                  intlLabel: {
                    id: "custom-enum.enumType.tipo-empreendimento.label",
                    defaultMessage: "Tipo de Empreendimento",
                  },
                },
              },
              {
                key: "marcas",
                value: "marcas",
                metadatas: {
                  intlLabel: {
                    id: "custom-enum.enumType.marcas.label",
                    defaultMessage: "Marcas",
                  },
                },
              },
            ],
          },
        ],
        advanced: [
          {
            sectionTitle: null,
            items: [
              {
                name: "required",
                type: "checkbox",
                intlLabel: {
                  id: "custom-enum.required.label",
                  defaultMessage: "Required field",
                },
                description: {
                  id: "custom-enum.required.description",
                  defaultMessage:
                    "You won't be able to create an entry if this field is empty",
                },
              },
            ],
          },
        ],
      },
    });
  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
