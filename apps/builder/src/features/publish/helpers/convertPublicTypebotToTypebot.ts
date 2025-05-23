import { isPublicTypebotAtLeastV6 } from "@typebot.io/typebot/helpers/isPublicTypebotAtLeastV6";
import type { PublicTypebot } from "@typebot.io/typebot/schemas/publicTypebot";
import type { TypebotV6 } from "@typebot.io/typebot/schemas/typebot";

export const convertPublicTypebotToTypebot = (
  typebot: PublicTypebot,
  existingTypebot: TypebotV6,
): TypebotV6 => {
  if (!isPublicTypebotAtLeastV6(typebot)) return existingTypebot;
  return {
    id: typebot.typebotId,
    version: typebot.version,
    groups: typebot.groups,
    edges: typebot.edges,
    name: existingTypebot.name,
    publicId: existingTypebot.publicId,
    settings: typebot.settings,
    theme: typebot.theme,
    variables: typebot.variables,
    customDomain: existingTypebot.customDomain,
    createdAt: existingTypebot.createdAt,
    updatedAt: existingTypebot.updatedAt,
    folderId: existingTypebot.folderId,
    icon: existingTypebot.icon,
    workspaceId: existingTypebot.workspaceId,
    isArchived: existingTypebot.isArchived,
    isClosed: existingTypebot.isClosed,
    resultsTablePreferences: existingTypebot.resultsTablePreferences,
    selectedThemeTemplateId: existingTypebot.selectedThemeTemplateId,
    whatsAppCredentialsId: existingTypebot.whatsAppCredentialsId,
    riskLevel: existingTypebot.riskLevel,
    events: typebot.events,
  };
};
