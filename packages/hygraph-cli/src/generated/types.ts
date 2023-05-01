/* eslint-disable */
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AcceptInvitePayloadKeySpecifier = ('invite' | AcceptInvitePayloadKeySpecifier)[];
export type AcceptInvitePayloadFieldPolicy = {
	invite?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppKeySpecifier = ('apiId' | 'author' | 'avatarUrl' | 'configurationUrl' | 'createdAt' | 'description' | 'elements' | 'id' | 'name' | 'permissions' | 'publicationStatus' | 'setupUrl' | 'updatedAt' | 'webhookUrl' | AppKeySpecifier)[];
export type AppFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	elements?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	setupUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppInstallationKeySpecifier = ('app' | 'authToken' | 'config' | 'createdAt' | 'environment' | 'fields' | 'id' | 'sidebarElements' | 'status' | 'updatedAt' | AppInstallationKeySpecifier)[];
export type AppInstallationFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sidebarElements?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppPermissionsKeySpecifier = ('CONTENT' | 'SCHEMA' | 'WEBHOOKS' | AppPermissionsKeySpecifier)[];
export type AppPermissionsFieldPolicy = {
	CONTENT?: FieldPolicy<any> | FieldReadFunction<any>,
	SCHEMA?: FieldPolicy<any> | FieldReadFunction<any>,
	WEBHOOKS?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppSidebarElementKeySpecifier = ('appElement' | 'appInstallation' | 'config' | 'createdAt' | 'description' | 'displayName' | 'id' | 'isEnabled' | 'model' | 'position' | 'updatedAt' | AppSidebarElementKeySpecifier)[];
export type AppSidebarElementFieldPolicy = {
	appElement?: FieldPolicy<any> | FieldReadFunction<any>,
	appInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppTokenKeySpecifier = ('app' | 'id' | AppTokenKeySpecifier)[];
export type AppTokenFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppTokenViewerKeySpecifier = ('availableExtensionPermissions' | 'availableExtensionSrcTypes' | 'availableIntegrations' | 'id' | 'plans' | 'project' | 'regions' | 'templates' | AppTokenViewerKeySpecifier)[];
export type AppTokenViewerFieldPolicy = {
	availableExtensionPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	availableExtensionSrcTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	availableIntegrations?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	plans?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	regions?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppWithSecretsKeySpecifier = ('apiId' | 'author' | 'avatarUrl' | 'clientId' | 'clientSecret' | 'configurationUrl' | 'createdAt' | 'description' | 'elements' | 'id' | 'name' | 'permissions' | 'publicationStatus' | 'setupUrl' | 'updatedAt' | 'webhookUrl' | AppWithSecretsKeySpecifier)[];
export type AppWithSecretsFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	clientId?: FieldPolicy<any> | FieldReadFunction<any>,
	clientSecret?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	elements?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	setupUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetModelKeySpecifier = ('apiId' | 'apiIdPlural' | 'contentViews' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'environment' | 'field' | 'fields' | 'hasContent' | 'hasLocalizedComponents' | 'id' | 'isLocalized' | 'isSystem' | 'isVersioned' | 'sidebarElements' | 'titleFields' | 'updatedAt' | 'viewerPermission' | AssetModelKeySpecifier)[];
export type AssetModelFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	apiIdPlural?: FieldPolicy<any> | FieldReadFunction<any>,
	contentViews?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	hasContent?: FieldPolicy<any> | FieldReadFunction<any>,
	hasLocalizedComponents?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocalized?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	isVersioned?: FieldPolicy<any> | FieldReadFunction<any>,
	sidebarElements?: FieldPolicy<any> | FieldReadFunction<any>,
	titleFields?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerPermission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AsyncOperationPayloadKeySpecifier = ('migration' | AsyncOperationPayloadKeySpecifier)[];
export type AsyncOperationPayloadFieldPolicy = {
	migration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuditLogKeySpecifier = ('action' | 'entityId' | 'environmentName' | 'id' | 'payload' | 'resource' | 'timestamp' | 'triggerType' | 'triggeredBy' | AuditLogKeySpecifier)[];
export type AuditLogFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	entityId?: FieldPolicy<any> | FieldReadFunction<any>,
	environmentName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	resource?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerType?: FieldPolicy<any> | FieldReadFunction<any>,
	triggeredBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuditLogsPayloadKeySpecifier = ('logs' | 'total' | AuditLogsPayloadKeySpecifier)[];
export type AuditLogsPayloadFieldPolicy = {
	logs?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AvailableExtensionPermissionKeySpecifier = ('createdAt' | 'description' | 'id' | 'name' | 'updatedAt' | AvailableExtensionPermissionKeySpecifier)[];
export type AvailableExtensionPermissionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingPeriodKeySpecifier = ('from' | 'to' | BillingPeriodKeySpecifier)[];
export type BillingPeriodFieldPolicy = {
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CloningProjectKeySpecifier = ('cloningFrom' | 'description' | 'id' | 'name' | 'picture' | CloningProjectKeySpecifier)[];
export type CloningProjectFieldPolicy = {
	cloningFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentingConfigKeySpecifier = ('token' | 'url' | 'userKey' | CommentingConfigKeySpecifier)[];
export type CommentingConfigFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userKey?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentingInfoPayloadKeySpecifier = ('gcms' | CommentingInfoPayloadKeySpecifier)[];
export type CommentingInfoPayloadFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommonFilestackKeySpecifier = ('apiKey' | 'path' | 'security' | CommonFilestackKeySpecifier)[];
export type CommonFilestackFieldPolicy = {
	apiKey?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	security?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommonFilestackSecurityOptionsKeySpecifier = ('auth' | 'enabled' | CommonFilestackSecurityOptionsKeySpecifier)[];
export type CommonFilestackSecurityOptionsFieldPolicy = {
	auth?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentKeySpecifier = ('apiId' | 'apiIdPlural' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'environment' | 'fields' | 'hasContent' | 'id' | 'isLocalized' | 'isSystem' | 'titleFields' | 'updatedAt' | ComponentKeySpecifier)[];
export type ComponentFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	apiIdPlural?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	hasContent?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocalized?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	titleFields?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentFieldKeySpecifier = ('apiId' | 'component' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'extensions' | 'formConfig' | 'hasEmptyValues' | 'id' | 'isHidden' | 'isList' | 'isRequired' | 'isSystem' | 'meta' | 'model' | 'parent' | 'position' | 'tableConfig' | 'type' | 'updatedAt' | 'visibility' | ComponentFieldKeySpecifier)[];
export type ComponentFieldFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	formConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	hasEmptyValues?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>,
	isList?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	tableConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentUnionFieldKeySpecifier = ('apiId' | 'components' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'extensions' | 'formConfig' | 'id' | 'isHidden' | 'isList' | 'isRequired' | 'isSystem' | 'meta' | 'model' | 'parent' | 'position' | 'tableConfig' | 'type' | 'updatedAt' | 'visibility' | ComponentUnionFieldKeySpecifier)[];
export type ComponentUnionFieldFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	formConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>,
	isList?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	tableConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentModelKeySpecifier = ('assetModel' | 'component' | 'components' | 'enumeration' | 'enumerations' | 'locales' | 'model' | 'models' | 'stages' | 'unions' | ContentModelKeySpecifier)[];
export type ContentModelFieldPolicy = {
	assetModel?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	enumeration?: FieldPolicy<any> | FieldReadFunction<any>,
	enumerations?: FieldPolicy<any> | FieldReadFunction<any>,
	locales?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	models?: FieldPolicy<any> | FieldReadFunction<any>,
	stages?: FieldPolicy<any> | FieldReadFunction<any>,
	unions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentPermissionAppTokenTargetKeySpecifier = ('appInstallation' | ContentPermissionAppTokenTargetKeySpecifier)[];
export type ContentPermissionAppTokenTargetFieldPolicy = {
	appInstallation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentPermissionPermanentAuthTokenTargetKeySpecifier = ('permanentAuthToken' | ContentPermissionPermanentAuthTokenTargetKeySpecifier)[];
export type ContentPermissionPermanentAuthTokenTargetFieldPolicy = {
	permanentAuthToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentPermissionPublicTargetKeySpecifier = ('environment' | ContentPermissionPublicTargetKeySpecifier)[];
export type ContentPermissionPublicTargetFieldPolicy = {
	environment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentPermissionRoleTargetKeySpecifier = ('environment' | 'role' | ContentPermissionRoleTargetKeySpecifier)[];
export type ContentPermissionRoleTargetFieldPolicy = {
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentViewKeySpecifier = ('columns' | 'createdAt' | 'description' | 'filters' | 'id' | 'isSystem' | 'model' | 'name' | 'orderBy' | 'position' | 'type' | 'updatedAt' | 'viewGroup' | ContentViewKeySpecifier)[];
export type ContentViewFieldPolicy = {
	columns?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	filters?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orderBy?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewGroup?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentViewColumnKeySpecifier = ('field' | 'id' | 'isVisible' | 'position' | 'width' | ContentViewColumnKeySpecifier)[];
export type ContentViewColumnFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isVisible?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateAppExchangeTokenPayloadKeySpecifier = ('createdAppExchangeToken' | CreateAppExchangeTokenPayloadKeySpecifier)[];
export type CreateAppExchangeTokenPayloadFieldPolicy = {
	createdAppExchangeToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateAppInstallationPayloadKeySpecifier = ('createdAppInstallation' | CreateAppInstallationPayloadKeySpecifier)[];
export type CreateAppInstallationPayloadFieldPolicy = {
	createdAppInstallation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateAppPayloadKeySpecifier = ('createdApp' | CreateAppPayloadKeySpecifier)[];
export type CreateAppPayloadFieldPolicy = {
	createdApp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateAppSecretsPayloadKeySpecifier = ('clientId' | 'clientSecret' | CreateAppSecretsPayloadKeySpecifier)[];
export type CreateAppSecretsPayloadFieldPolicy = {
	clientId?: FieldPolicy<any> | FieldReadFunction<any>,
	clientSecret?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateContentPermissionKeySpecifier = ('condition' | 'createdAt' | 'enabled' | 'id' | 'locales' | 'model' | 'target' | 'updatedAt' | CreateContentPermissionKeySpecifier)[];
export type CreateContentPermissionFieldPolicy = {
	condition?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locales?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateContentViewPayloadKeySpecifier = ('createdContentView' | CreateContentViewPayloadKeySpecifier)[];
export type CreateContentViewPayloadFieldPolicy = {
	createdContentView?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCreateContentPermissionPayloadKeySpecifier = ('permission' | CreateCreateContentPermissionPayloadKeySpecifier)[];
export type CreateCreateContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateDeleteContentPermissionPayloadKeySpecifier = ('permission' | CreateDeleteContentPermissionPayloadKeySpecifier)[];
export type CreateDeleteContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateEnvironmentPayloadKeySpecifier = ('createdEnvironment' | CreateEnvironmentPayloadKeySpecifier)[];
export type CreateEnvironmentPayloadFieldPolicy = {
	createdEnvironment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateFieldExtensionPayloadKeySpecifier = ('createdExtension' | CreateFieldExtensionPayloadKeySpecifier)[];
export type CreateFieldExtensionPayloadFieldPolicy = {
	createdExtension?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateGatsbyCloudIntegrationPayloadKeySpecifier = ('createdGatsbyCloudIntegration' | CreateGatsbyCloudIntegrationPayloadKeySpecifier)[];
export type CreateGatsbyCloudIntegrationPayloadFieldPolicy = {
	createdGatsbyCloudIntegration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateNetlifyIntegrationPayloadKeySpecifier = ('createdNetlifyIntegration' | CreateNetlifyIntegrationPayloadKeySpecifier)[];
export type CreateNetlifyIntegrationPayloadFieldPolicy = {
	createdNetlifyIntegration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePermanentAuthTokenPayloadKeySpecifier = ('createdPermanentAuthToken' | CreatePermanentAuthTokenPayloadKeySpecifier)[];
export type CreatePermanentAuthTokenPayloadFieldPolicy = {
	createdPermanentAuthToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePublishContentPermissionPayloadKeySpecifier = ('permission' | CreatePublishContentPermissionPayloadKeySpecifier)[];
export type CreatePublishContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateReadContentPermissionPayloadKeySpecifier = ('permission' | CreateReadContentPermissionPayloadKeySpecifier)[];
export type CreateReadContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateReadVersionContentPermissionPayloadKeySpecifier = ('permission' | CreateReadVersionContentPermissionPayloadKeySpecifier)[];
export type CreateReadVersionContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSidebarElementPayloadKeySpecifier = ('createdSidebarElement' | CreateSidebarElementPayloadKeySpecifier)[];
export type CreateSidebarElementPayloadFieldPolicy = {
	createdSidebarElement?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSidebarExtensionPayloadKeySpecifier = ('createdExtension' | CreateSidebarExtensionPayloadKeySpecifier)[];
export type CreateSidebarExtensionPayloadFieldPolicy = {
	createdExtension?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateUnpublishContentPermissionPayloadKeySpecifier = ('permission' | CreateUnpublishContentPermissionPayloadKeySpecifier)[];
export type CreateUnpublishContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateUpdateContentPermissionPayloadKeySpecifier = ('permission' | CreateUpdateContentPermissionPayloadKeySpecifier)[];
export type CreateUpdateContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateUserPayloadKeySpecifier = ('gcms' | CreateUserPayloadKeySpecifier)[];
export type CreateUserPayloadFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateViewGroupPayloadKeySpecifier = ('createdViewGroup' | CreateViewGroupPayloadKeySpecifier)[];
export type CreateViewGroupPayloadFieldPolicy = {
	createdViewGroup?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateWebhookPayloadKeySpecifier = ('createdWebhook' | CreateWebhookPayloadKeySpecifier)[];
export type CreateWebhookPayloadFieldPolicy = {
	createdWebhook?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomSidebarElementKeySpecifier = ('config' | 'createdAt' | 'description' | 'displayName' | 'extension' | 'id' | 'isEnabled' | 'model' | 'position' | 'updatedAt' | CustomSidebarElementKeySpecifier)[];
export type CustomSidebarElementFieldPolicy = {
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	extension?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteAccountPayloadKeySpecifier = ('deletedUserId' | DeleteAccountPayloadKeySpecifier)[];
export type DeleteAccountPayloadFieldPolicy = {
	deletedUserId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteAppInstallationPayloadKeySpecifier = ('deletedAppInstallationId' | DeleteAppInstallationPayloadKeySpecifier)[];
export type DeleteAppInstallationPayloadFieldPolicy = {
	deletedAppInstallationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteAppPayloadKeySpecifier = ('deletedAppId' | DeleteAppPayloadKeySpecifier)[];
export type DeleteAppPayloadFieldPolicy = {
	deletedAppId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteContentPermissionKeySpecifier = ('condition' | 'createdAt' | 'enabled' | 'id' | 'locales' | 'model' | 'target' | 'updatedAt' | DeleteContentPermissionKeySpecifier)[];
export type DeleteContentPermissionFieldPolicy = {
	condition?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locales?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteContentPermissionPayloadKeySpecifier = ('deletedPermissionId' | DeleteContentPermissionPayloadKeySpecifier)[];
export type DeleteContentPermissionPayloadFieldPolicy = {
	deletedPermissionId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteContentViewPayloadKeySpecifier = ('deletedContentViewId' | DeleteContentViewPayloadKeySpecifier)[];
export type DeleteContentViewPayloadFieldPolicy = {
	deletedContentViewId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteEnvironmentPayloadKeySpecifier = ('deletedEnvironmentId' | DeleteEnvironmentPayloadKeySpecifier)[];
export type DeleteEnvironmentPayloadFieldPolicy = {
	deletedEnvironmentId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteExtensionPayloadKeySpecifier = ('deletedExtensionId' | DeleteExtensionPayloadKeySpecifier)[];
export type DeleteExtensionPayloadFieldPolicy = {
	deletedExtensionId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteGatsbyCloudIntegrationPayloadKeySpecifier = ('deletedGatsbyCloudIntegrationId' | DeleteGatsbyCloudIntegrationPayloadKeySpecifier)[];
export type DeleteGatsbyCloudIntegrationPayloadFieldPolicy = {
	deletedGatsbyCloudIntegrationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteNetlifyIntegrationPayloadKeySpecifier = ('deletedNetlifyIntegrationId' | DeleteNetlifyIntegrationPayloadKeySpecifier)[];
export type DeleteNetlifyIntegrationPayloadFieldPolicy = {
	deletedNetlifyIntegrationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePermanentAuthTokenPayloadKeySpecifier = ('deletedPermanentAuthTokenId' | DeletePermanentAuthTokenPayloadKeySpecifier)[];
export type DeletePermanentAuthTokenPayloadFieldPolicy = {
	deletedPermanentAuthTokenId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteProjectPayloadKeySpecifier = ('deletedProjectId' | DeleteProjectPayloadKeySpecifier)[];
export type DeleteProjectPayloadFieldPolicy = {
	deletedProjectId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteRolePayloadKeySpecifier = ('deletedId' | DeleteRolePayloadKeySpecifier)[];
export type DeleteRolePayloadFieldPolicy = {
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteSidebarElementPayloadKeySpecifier = ('deletedSidebarElementId' | DeleteSidebarElementPayloadKeySpecifier)[];
export type DeleteSidebarElementPayloadFieldPolicy = {
	deletedSidebarElementId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteViewGroupPayloadKeySpecifier = ('deletedViewGroupId' | DeleteViewGroupPayloadKeySpecifier)[];
export type DeleteViewGroupPayloadFieldPolicy = {
	deletedViewGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteWebhookPayloadKeySpecifier = ('deletedWebhookId' | DeleteWebhookPayloadKeySpecifier)[];
export type DeleteWebhookPayloadFieldPolicy = {
	deletedWebhookId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiffEnvironmentPayloadKeySpecifier = ('changes' | DiffEnvironmentPayloadKeySpecifier)[];
export type DiffEnvironmentPayloadFieldPolicy = {
	changes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnumerableFieldKeySpecifier = ('apiId' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'enumeration' | 'extensions' | 'formConfig' | 'id' | 'initialValue' | 'isHidden' | 'isList' | 'isLocalized' | 'isRequired' | 'isSystem' | 'isTitle' | 'isUnique' | 'meta' | 'model' | 'parent' | 'position' | 'tableConfig' | 'type' | 'updatedAt' | 'visibility' | EnumerableFieldKeySpecifier)[];
export type EnumerableFieldFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	enumeration?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	formConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initialValue?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>,
	isList?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocalized?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	isTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	isUnique?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	tableConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnumerationKeySpecifier = ('apiId' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'environment' | 'id' | 'isSystem' | 'updatedAt' | 'values' | EnumerationKeySpecifier)[];
export type EnumerationFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnumerationValueKeySpecifier = ('apiId' | 'displayName' | 'id' | EnumerationValueKeySpecifier)[];
export type EnumerationValueFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnvironmentKeySpecifier = ('appInstallation' | 'appInstallations' | 'assetConfig' | 'authToken' | 'commentingConfig' | 'contentModel' | 'contentView' | 'contentViews' | 'createdAt' | 'deliveryUrl' | 'description' | 'diff' | 'displayName' | 'endpoint' | 'extension' | 'extensions' | 'id' | 'integration' | 'integrations' | 'isCloning' | 'metrics' | 'migration' | 'migrations' | 'name' | 'permanentAuthTokens' | 'publicContentAPI' | 'quotas' | 'remoteSource' | 'remoteSources' | 'revisionCount' | 'runningMigration' | 'updatedAt' | 'viewGroups' | 'webhook' | 'webhooks' | EnvironmentKeySpecifier)[];
export type EnvironmentFieldPolicy = {
	appInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	appInstallations?: FieldPolicy<any> | FieldReadFunction<any>,
	assetConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	commentingConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	contentModel?: FieldPolicy<any> | FieldReadFunction<any>,
	contentView?: FieldPolicy<any> | FieldReadFunction<any>,
	contentViews?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	diff?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	endpoint?: FieldPolicy<any> | FieldReadFunction<any>,
	extension?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	integration?: FieldPolicy<any> | FieldReadFunction<any>,
	integrations?: FieldPolicy<any> | FieldReadFunction<any>,
	isCloning?: FieldPolicy<any> | FieldReadFunction<any>,
	metrics?: FieldPolicy<any> | FieldReadFunction<any>,
	migration?: FieldPolicy<any> | FieldReadFunction<any>,
	migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permanentAuthTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	publicContentAPI?: FieldPolicy<any> | FieldReadFunction<any>,
	quotas?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteSource?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteSources?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	runningMigration?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	webhook?: FieldPolicy<any> | FieldReadFunction<any>,
	webhooks?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnvironmentLevelQuotaKeySpecifier = ('components' | 'contentPermissions' | 'locales' | 'models' | 'remoteSources' | 'stages' | 'webhooks' | EnvironmentLevelQuotaKeySpecifier)[];
export type EnvironmentLevelQuotaFieldPolicy = {
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	contentPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	locales?: FieldPolicy<any> | FieldReadFunction<any>,
	models?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteSources?: FieldPolicy<any> | FieldReadFunction<any>,
	stages?: FieldPolicy<any> | FieldReadFunction<any>,
	webhooks?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnvironmentPermissionsKeySpecifier = ('allowMutations' | EnvironmentPermissionsKeySpecifier)[];
export type EnvironmentPermissionsFieldPolicy = {
	allowMutations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnvironmentPromotedPayloadKeySpecifier = ('previousMasterEnvironment' | 'promotedEnvironment' | 'promotedEnvironmentPreviousDisplayName' | EnvironmentPromotedPayloadKeySpecifier)[];
export type EnvironmentPromotedPayloadFieldPolicy = {
	previousMasterEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	promotedEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	promotedEnvironmentPreviousDisplayName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExtensionSidebarElementKeySpecifier = ('config' | 'createdAt' | 'description' | 'displayName' | 'extension' | 'id' | 'isEnabled' | 'model' | 'position' | 'updatedAt' | ExtensionSidebarElementKeySpecifier)[];
export type ExtensionSidebarElementFieldPolicy = {
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	extension?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExtensionSrcTypeKeySpecifier = ('createdAt' | 'description' | 'id' | 'name' | 'type' | 'updatedAt' | ExtensionSrcTypeKeySpecifier)[];
export type ExtensionSrcTypeFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeedbackKeySpecifier = ('allowContact' | 'createdAt' | 'featureName' | 'id' | 'message' | 'rating' | 'reasons' | 'type' | FeedbackKeySpecifier)[];
export type FeedbackFieldPolicy = {
	allowContact?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	featureName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	reasons?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldAppElementKeySpecifier = ('apiId' | 'app' | 'config' | 'createdAt' | 'description' | 'features' | 'fieldType' | 'id' | 'name' | 'src' | 'type' | 'updatedAt' | FieldAppElementKeySpecifier)[];
export type FieldAppElementFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldConfigKeySpecifier = ('appElement' | 'appInstallation' | 'config' | 'extension' | 'id' | 'renderer' | FieldConfigKeySpecifier)[];
export type FieldConfigFieldPolicy = {
	appElement?: FieldPolicy<any> | FieldReadFunction<any>,
	appInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	extension?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	renderer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldExtensionKeySpecifier = ('apiId' | 'config' | 'createdAt' | 'createdBy' | 'description' | 'environment' | 'fieldType' | 'fields' | 'hasFormRenderer' | 'hasListRenderer' | 'hasTableRenderer' | 'id' | 'isActive' | 'meta' | 'name' | 'neededPermissions' | 'src' | 'srcType' | 'updatedAt' | 'updatedBy' | FieldExtensionKeySpecifier)[];
export type FieldExtensionFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldType?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	hasFormRenderer?: FieldPolicy<any> | FieldReadFunction<any>,
	hasListRenderer?: FieldPolicy<any> | FieldReadFunction<any>,
	hasTableRenderer?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	neededPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	srcType?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldInputArgKeySpecifier = ('apiId' | 'id' | 'isList' | 'isRequired' | 'remoteType' | FieldInputArgKeySpecifier)[];
export type FieldInputArgFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isList?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldValidationFloatRangeKeySpecifier = ('errorMessage' | 'max' | 'min' | FieldValidationFloatRangeKeySpecifier)[];
export type FieldValidationFloatRangeFieldPolicy = {
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldValidationIntRangeKeySpecifier = ('errorMessage' | 'max' | 'min' | FieldValidationIntRangeKeySpecifier)[];
export type FieldValidationIntRangeFieldPolicy = {
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldValidationRangeKeySpecifier = ('errorMessage' | 'max' | 'min' | FieldValidationRangeKeySpecifier)[];
export type FieldValidationRangeFieldPolicy = {
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldValidationRegExKeySpecifier = ('errorMessage' | 'flags' | 'regex' | FieldValidationRegExKeySpecifier)[];
export type FieldValidationRegExFieldPolicy = {
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	regex?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilestackKeySpecifier = ('apiKey' | 'bucket' | 'isManagedBucket' | 'path' | 'security' | FilestackKeySpecifier)[];
export type FilestackFieldPolicy = {
	apiKey?: FieldPolicy<any> | FieldReadFunction<any>,
	bucket?: FieldPolicy<any> | FieldReadFunction<any>,
	isManagedBucket?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	security?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilestackSecurityAuthOptionsKeySpecifier = ('policy' | 'signature' | FilestackSecurityAuthOptionsKeySpecifier)[];
export type FilestackSecurityAuthOptionsFieldPolicy = {
	policy?: FieldPolicy<any> | FieldReadFunction<any>,
	signature?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilestackSecurityOptionsKeySpecifier = ('auth' | 'enabled' | 'globalExpires' | 'stageOverrides' | FilestackSecurityOptionsKeySpecifier)[];
export type FilestackSecurityOptionsFieldPolicy = {
	auth?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	globalExpires?: FieldPolicy<any> | FieldReadFunction<any>,
	stageOverrides?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FloatFieldValidationsKeySpecifier = ('listItemCount' | 'range' | FloatFieldValidationsKeySpecifier)[];
export type FloatFieldValidationsFieldPolicy = {
	listItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	range?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FormSidebarAppElementKeySpecifier = ('apiId' | 'app' | 'config' | 'createdAt' | 'description' | 'id' | 'name' | 'src' | 'type' | 'updatedAt' | FormSidebarAppElementKeySpecifier)[];
export type FormSidebarAppElementFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GatsbyCloudIntegrationKeySpecifier = ('buildWebhookURL' | 'createdAt' | 'description' | 'displayName' | 'id' | 'previewURL' | 'previewWebhookURL' | 'productionURL' | 'sitePrefix' | 'siteURL' | 'updatedAt' | GatsbyCloudIntegrationKeySpecifier)[];
export type GatsbyCloudIntegrationFieldPolicy = {
	buildWebhookURL?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	previewURL?: FieldPolicy<any> | FieldReadFunction<any>,
	previewWebhookURL?: FieldPolicy<any> | FieldReadFunction<any>,
	productionURL?: FieldPolicy<any> | FieldReadFunction<any>,
	sitePrefix?: FieldPolicy<any> | FieldReadFunction<any>,
	siteURL?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GraphQLRemoteFieldConfigKeySpecifier = ('cacheTTLSeconds' | 'forwardClientHeaders' | 'headers' | 'method' | 'operationName' | 'query' | 'remoteSource' | 'returnType' | GraphQLRemoteFieldConfigKeySpecifier)[];
export type GraphQLRemoteFieldConfigFieldPolicy = {
	cacheTTLSeconds?: FieldPolicy<any> | FieldReadFunction<any>,
	forwardClientHeaders?: FieldPolicy<any> | FieldReadFunction<any>,
	headers?: FieldPolicy<any> | FieldReadFunction<any>,
	method?: FieldPolicy<any> | FieldReadFunction<any>,
	operationName?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteSource?: FieldPolicy<any> | FieldReadFunction<any>,
	returnType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GraphQLRemoteSourceKeySpecifier = ('createdAt' | 'debugEnabled' | 'description' | 'displayName' | 'headers' | 'id' | 'introspectionHeaders' | 'introspectionMethod' | 'introspectionUrl' | 'prefix' | 'remoteTypeDefinitionsConnection' | 'schema' | 'type' | 'updatedAt' | 'url' | GraphQLRemoteSourceKeySpecifier)[];
export type GraphQLRemoteSourceFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	debugEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	headers?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	introspectionHeaders?: FieldPolicy<any> | FieldReadFunction<any>,
	introspectionMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	introspectionUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteTypeDefinitionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	schema?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IAppKeySpecifier = ('apiId' | 'author' | 'avatarUrl' | 'configurationUrl' | 'createdAt' | 'description' | 'elements' | 'id' | 'name' | 'permissions' | 'publicationStatus' | 'setupUrl' | 'updatedAt' | 'webhookUrl' | IAppKeySpecifier)[];
export type IAppFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	elements?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	setupUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IAppElementKeySpecifier = ('apiId' | 'app' | 'config' | 'createdAt' | 'description' | 'id' | 'name' | 'src' | 'type' | 'updatedAt' | IAppElementKeySpecifier)[];
export type IAppElementFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IAssetConfigKeySpecifier = ('apiKey' | IAssetConfigKeySpecifier)[];
export type IAssetConfigFieldPolicy = {
	apiKey?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IContentPermissionKeySpecifier = ('createdAt' | 'enabled' | 'id' | 'model' | 'target' | 'updatedAt' | IContentPermissionKeySpecifier)[];
export type IContentPermissionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IExtensionKeySpecifier = ('apiId' | 'config' | 'createdAt' | 'createdBy' | 'description' | 'environment' | 'id' | 'isActive' | 'meta' | 'name' | 'neededPermissions' | 'src' | 'srcType' | 'updatedAt' | 'updatedBy' | IExtensionKeySpecifier)[];
export type IExtensionFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	neededPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	srcType?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IFieldKeySpecifier = ('apiId' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'extensions' | 'formConfig' | 'id' | 'isHidden' | 'isList' | 'isSystem' | 'meta' | 'model' | 'parent' | 'position' | 'tableConfig' | 'updatedAt' | 'visibility' | IFieldKeySpecifier)[];
export type IFieldFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	formConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>,
	isList?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	tableConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IFieldParentKeySpecifier = ('apiId' | 'displayName' | 'id' | IFieldParentKeySpecifier)[];
export type IFieldParentFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IIntegrationKeySpecifier = ('createdAt' | 'description' | 'displayName' | 'id' | 'updatedAt' | IIntegrationKeySpecifier)[];
export type IIntegrationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ILocalizableFieldKeySpecifier = ('isLocalized' | ILocalizableFieldKeySpecifier)[];
export type ILocalizableFieldFieldPolicy = {
	isLocalized?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IModelKeySpecifier = ('apiId' | 'apiIdPlural' | 'contentViews' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'environment' | 'field' | 'fields' | 'hasContent' | 'hasLocalizedComponents' | 'id' | 'isLocalized' | 'isSystem' | 'isVersioned' | 'sidebarElements' | 'titleFields' | 'updatedAt' | 'viewerPermission' | IModelKeySpecifier)[];
export type IModelFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	apiIdPlural?: FieldPolicy<any> | FieldReadFunction<any>,
	contentViews?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	hasContent?: FieldPolicy<any> | FieldReadFunction<any>,
	hasLocalizedComponents?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocalized?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	isVersioned?: FieldPolicy<any> | FieldReadFunction<any>,
	sidebarElements?: FieldPolicy<any> | FieldReadFunction<any>,
	titleFields?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerPermission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IPendingProjectKeySpecifier = ('description' | 'id' | 'name' | 'picture' | IPendingProjectKeySpecifier)[];
export type IPendingProjectFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IRemoteFieldConfigKeySpecifier = ('cacheTTLSeconds' | 'forwardClientHeaders' | 'headers' | 'method' | 'remoteSource' | 'returnType' | IRemoteFieldConfigKeySpecifier)[];
export type IRemoteFieldConfigFieldPolicy = {
	cacheTTLSeconds?: FieldPolicy<any> | FieldReadFunction<any>,
	forwardClientHeaders?: FieldPolicy<any> | FieldReadFunction<any>,
	headers?: FieldPolicy<any> | FieldReadFunction<any>,
	method?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteSource?: FieldPolicy<any> | FieldReadFunction<any>,
	returnType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IRemoteSourceKeySpecifier = ('createdAt' | 'debugEnabled' | 'description' | 'displayName' | 'headers' | 'id' | 'prefix' | 'remoteTypeDefinitionsConnection' | 'type' | 'updatedAt' | 'url' | IRemoteSourceKeySpecifier)[];
export type IRemoteSourceFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	debugEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	headers?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteTypeDefinitionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IRequireableFieldKeySpecifier = ('isRequired' | IRequireableFieldKeySpecifier)[];
export type IRequireableFieldFieldPolicy = {
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ISchemaMigrationPayloadKeySpecifier = ('migration' | ISchemaMigrationPayloadKeySpecifier)[];
export type ISchemaMigrationPayloadFieldPolicy = {
	migration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ISidebarElementKeySpecifier = ('config' | 'createdAt' | 'description' | 'displayName' | 'id' | 'isEnabled' | 'model' | 'position' | 'updatedAt' | ISidebarElementKeySpecifier)[];
export type ISidebarElementFieldPolicy = {
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ITemplateKeySpecifier = ('coverPicture' | 'description' | 'details' | 'id' | 'name' | 'picture' | 'resources' | ITemplateKeySpecifier)[];
export type ITemplateFieldPolicy = {
	coverPicture?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ITitleableFieldKeySpecifier = ('isTitle' | ITitleableFieldKeySpecifier)[];
export type ITitleableFieldFieldPolicy = {
	isTitle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IUnionFieldKeySpecifier = ('isMemberType' | 'union' | IUnionFieldKeySpecifier)[];
export type IUnionFieldFieldPolicy = {
	isMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	union?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IUniqueableFieldKeySpecifier = ('isUnique' | IUniqueableFieldKeySpecifier)[];
export type IUniqueableFieldFieldPolicy = {
	isUnique?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IUserKeySpecifier = ('createdAt' | 'id' | 'preferences' | 'profile' | 'updatedAt' | IUserKeySpecifier)[];
export type IUserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	preferences?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IViewerKeySpecifier = ('availableExtensionPermissions' | 'availableExtensionSrcTypes' | 'availableIntegrations' | 'id' | 'plans' | 'project' | 'regions' | 'templates' | IViewerKeySpecifier)[];
export type IViewerFieldPolicy = {
	availableExtensionPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	availableExtensionSrcTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	availableIntegrations?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	plans?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	regions?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IntFieldValidationsKeySpecifier = ('listItemCount' | 'range' | IntFieldValidationsKeySpecifier)[];
export type IntFieldValidationsFieldPolicy = {
	listItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	range?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InviteKeySpecifier = ('acceptedAt' | 'code' | 'createdAt' | 'email' | 'expirationDate' | 'id' | 'issuer' | 'origin' | 'project' | 'roles' | InviteKeySpecifier)[];
export type InviteFieldPolicy = {
	acceptedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	expirationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	issuer?: FieldPolicy<any> | FieldReadFunction<any>,
	origin?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeaveProjectPayloadKeySpecifier = ('leftProjectId' | LeaveProjectPayloadKeySpecifier)[];
export type LeaveProjectPayloadFieldPolicy = {
	leftProjectId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeaveTrialPayloadKeySpecifier = ('project' | LeaveTrialPayloadKeySpecifier)[];
export type LeaveTrialPayloadFieldPolicy = {
	project?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LegacyProjectKeySpecifier = ('description' | 'id' | 'isMigrated' | 'isOwner' | 'name' | 'picture' | 'url' | LegacyProjectKeySpecifier)[];
export type LegacyProjectFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isMigrated?: FieldPolicy<any> | FieldReadFunction<any>,
	isOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LifecycleKeySpecifier = ('progress' | 'steps' | LifecycleKeySpecifier)[];
export type LifecycleFieldPolicy = {
	progress?: FieldPolicy<any> | FieldReadFunction<any>,
	steps?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LifecycleStepKeySpecifier = ('description' | 'done' | 'name' | 'type' | LifecycleStepKeySpecifier)[];
export type LifecycleStepFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	done?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LimitKeySpecifier = ('addOnCode' | 'amount' | 'createdAt' | 'id' | 'name' | 'plan' | 'type' | 'updatedAt' | LimitKeySpecifier)[];
export type LimitFieldPolicy = {
	addOnCode?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	plan?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocaleKeySpecifier = ('apiId' | 'createdAt' | 'description' | 'displayName' | 'id' | 'isDefault' | 'updatedAt' | LocaleKeySpecifier)[];
export type LocaleFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ManagementPermissionKeySpecifier = ('action' | 'createdAt' | 'description' | 'id' | 'updatedAt' | ManagementPermissionKeySpecifier)[];
export type ManagementPermissionFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MaxComplexityPayloadKeySpecifier = ('gcms' | MaxComplexityPayloadKeySpecifier)[];
export type MaxComplexityPayloadFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberKeySpecifier = ('createdAt' | 'id' | 'isOwner' | 'preferences' | 'profile' | 'roles' | 'updatedAt' | MemberKeySpecifier)[];
export type MemberFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	preferences?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberEdgeKeySpecifier = ('node' | MemberEdgeKeySpecifier)[];
export type MemberEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MembersAggregateKeySpecifier = ('count' | MembersAggregateKeySpecifier)[];
export type MembersAggregateFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MembersConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | MembersConnectionKeySpecifier)[];
export type MembersConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetaInfoKeySpecifier = ('serverVersion' | MetaInfoKeySpecifier)[];
export type MetaInfoFieldPolicy = {
	serverVersion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetricsKeySpecifier = ('apiOperations' | 'assetTraffic' | 'assetTransformations' | MetricsKeySpecifier)[];
export type MetricsFieldPolicy = {
	apiOperations?: FieldPolicy<any> | FieldReadFunction<any>,
	assetTraffic?: FieldPolicy<any> | FieldReadFunction<any>,
	assetTransformations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MigrationKeySpecifier = ('createdAt' | 'errors' | 'finishedAt' | 'id' | 'name' | 'operationType' | 'resourceId' | 'status' | 'triggeredBy' | MigrationKeySpecifier)[];
export type MigrationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	finishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	operationType?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	triggeredBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModelKeySpecifier = ('apiId' | 'apiIdPlural' | 'contentViews' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'environment' | 'field' | 'fields' | 'hasContent' | 'hasLocalizedComponents' | 'id' | 'isLocalized' | 'isSystem' | 'isVersioned' | 'sidebarElements' | 'titleFields' | 'updatedAt' | 'viewerPermission' | ModelKeySpecifier)[];
export type ModelFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	apiIdPlural?: FieldPolicy<any> | FieldReadFunction<any>,
	contentViews?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	hasContent?: FieldPolicy<any> | FieldReadFunction<any>,
	hasLocalizedComponents?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocalized?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	isVersioned?: FieldPolicy<any> | FieldReadFunction<any>,
	sidebarElements?: FieldPolicy<any> | FieldReadFunction<any>,
	titleFields?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerPermission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModelViewerContentPermissionKeySpecifier = ('readByStages' | 'readVersion' | ModelViewerContentPermissionKeySpecifier)[];
export type ModelViewerContentPermissionFieldPolicy = {
	readByStages?: FieldPolicy<any> | FieldReadFunction<any>,
	readVersion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModelViewerPermissionKeySpecifier = ('content' | ModelViewerPermissionKeySpecifier)[];
export type ModelViewerPermissionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModelViewerReadContentPermissionKeySpecifier = ('allowedLocales' | 'allowedWithCondition' | ModelViewerReadContentPermissionKeySpecifier)[];
export type ModelViewerReadContentPermissionFieldPolicy = {
	allowedLocales?: FieldPolicy<any> | FieldReadFunction<any>,
	allowedWithCondition?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModelViewerReadContentPermissionByStageKeySpecifier = ('allowed' | 'stage' | ModelViewerReadContentPermissionByStageKeySpecifier)[];
export type ModelViewerReadContentPermissionByStageFieldPolicy = {
	allowed?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoveContentViewPayloadKeySpecifier = ('movedContentView' | 'updatedViewGroups' | MoveContentViewPayloadKeySpecifier)[];
export type MoveContentViewPayloadFieldPolicy = {
	movedContentView?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedViewGroups?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoveFieldPayloadKeySpecifier = ('movedFields' | MoveFieldPayloadKeySpecifier)[];
export type MoveFieldPayloadFieldPolicy = {
	movedFields?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoveSidebarElementPayloadKeySpecifier = ('movedSidebarElements' | MoveSidebarElementPayloadKeySpecifier)[];
export type MoveSidebarElementPayloadFieldPolicy = {
	movedSidebarElements?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoveViewGroupPayloadKeySpecifier = ('movedViewGroups' | MoveViewGroupPayloadKeySpecifier)[];
export type MoveViewGroupPayloadFieldPolicy = {
	movedViewGroups?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('acceptInvite' | 'cloneProject' | 'clonePublicProject' | 'createApp' | 'createAppExchangeToken' | 'createAppInstallation' | 'createAppSecrets' | 'createComponent' | 'createComponentField' | 'createComponentUnionField' | 'createContentView' | 'createCreateContentPermission' | 'createCustomSidebarElement' | 'createDeleteContentPermission' | 'createEnumerableField' | 'createEnumeration' | 'createEnvironment' | 'createFieldExtension' | 'createGatsbyCloudIntegration' | 'createGraphQLRemoteSource' | 'createLocale' | 'createModel' | 'createNetlifyIntegration' | 'createPermanentAuthToken' | 'createProject' | 'createPublishContentPermission' | 'createRESTRemoteSource' | 'createReadContentPermission' | 'createReadVersionContentPermission' | 'createRelationalField' | 'createRemoteField' | 'createRole' | 'createSidebarExtension' | 'createSimpleField' | 'createStage' | 'createSystemSidebarElement' | 'createUnionField' | 'createUnpublishContentPermission' | 'createUpdateContentPermission' | 'createViewGroup' | 'createWebhook' | 'deleteAccount' | 'deleteApp' | 'deleteAppInstallation' | 'deleteComponent' | 'deleteContentPermission' | 'deleteContentView' | 'deleteEnumeration' | 'deleteEnvironment' | 'deleteExtension' | 'deleteField' | 'deleteGatsbyCloudIntegration' | 'deleteLocale' | 'deleteModel' | 'deleteNetlifyIntegration' | 'deletePermanentAuthToken' | 'deleteProject' | 'deleteRemoteSource' | 'deleteRole' | 'deleteSidebarElement' | 'deleteStage' | 'deleteViewGroup' | 'deleteWebhook' | 'duplicateComponent' | 'duplicateModel' | 'leaveProject' | 'leaveTrial' | 'moveContentView' | 'moveField' | 'moveSidebarElement' | 'moveViewGroup' | 'promoteEnvironment' | 'removeMember' | 'resetSidebarElements' | 'retriggerWebhook' | 'revokeInvite' | 'sendFeedback' | 'sendInvite' | 'setUserAnalytics' | 'setUserPreferences' | 'startTrial' | 'submitBatchChanges' | 'switchPaymentSubscription' | 'track' | 'triggerNetlifyIntegrationBuild' | 'updateApp' | 'updateAppInstallation' | 'updateComponent' | 'updateComponentField' | 'updateComponentUnionField' | 'updateContentPermissionEnabled' | 'updateContentView' | 'updateCreateContentPermission' | 'updateDeleteContentPermission' | 'updateEnumerableField' | 'updateEnumeration' | 'updateEnvironment' | 'updateFieldExtension' | 'updateFilestackSecurityOptions' | 'updateGatsbyCloudIntegration' | 'updateGraphQLRemoteSource' | 'updateLocale' | 'updateMemberRoles' | 'updateModel' | 'updateNetlifyIntegration' | 'updatePermanentAuthToken' | 'updateProject' | 'updatePublicEndpoint' | 'updatePublishContentPermission' | 'updateRESTRemoteSource' | 'updateReadContentPermission' | 'updateReadVersionContentPermission' | 'updateRelationalField' | 'updateRemoteField' | 'updateRole' | 'updateSidebarElement' | 'updateSidebarExtension' | 'updateSimpleField' | 'updateStage' | 'updateUnionField' | 'updateUnpublishContentPermission' | 'updateUpdateContentPermission' | 'updateUserProfile' | 'updateViewGroup' | 'updateWebhook' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	acceptInvite?: FieldPolicy<any> | FieldReadFunction<any>,
	cloneProject?: FieldPolicy<any> | FieldReadFunction<any>,
	clonePublicProject?: FieldPolicy<any> | FieldReadFunction<any>,
	createApp?: FieldPolicy<any> | FieldReadFunction<any>,
	createAppExchangeToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createAppInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	createAppSecrets?: FieldPolicy<any> | FieldReadFunction<any>,
	createComponent?: FieldPolicy<any> | FieldReadFunction<any>,
	createComponentField?: FieldPolicy<any> | FieldReadFunction<any>,
	createComponentUnionField?: FieldPolicy<any> | FieldReadFunction<any>,
	createContentView?: FieldPolicy<any> | FieldReadFunction<any>,
	createCreateContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	createCustomSidebarElement?: FieldPolicy<any> | FieldReadFunction<any>,
	createDeleteContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	createEnumerableField?: FieldPolicy<any> | FieldReadFunction<any>,
	createEnumeration?: FieldPolicy<any> | FieldReadFunction<any>,
	createEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	createFieldExtension?: FieldPolicy<any> | FieldReadFunction<any>,
	createGatsbyCloudIntegration?: FieldPolicy<any> | FieldReadFunction<any>,
	createGraphQLRemoteSource?: FieldPolicy<any> | FieldReadFunction<any>,
	createLocale?: FieldPolicy<any> | FieldReadFunction<any>,
	createModel?: FieldPolicy<any> | FieldReadFunction<any>,
	createNetlifyIntegration?: FieldPolicy<any> | FieldReadFunction<any>,
	createPermanentAuthToken?: FieldPolicy<any> | FieldReadFunction<any>,
	createProject?: FieldPolicy<any> | FieldReadFunction<any>,
	createPublishContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	createRESTRemoteSource?: FieldPolicy<any> | FieldReadFunction<any>,
	createReadContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	createReadVersionContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	createRelationalField?: FieldPolicy<any> | FieldReadFunction<any>,
	createRemoteField?: FieldPolicy<any> | FieldReadFunction<any>,
	createRole?: FieldPolicy<any> | FieldReadFunction<any>,
	createSidebarExtension?: FieldPolicy<any> | FieldReadFunction<any>,
	createSimpleField?: FieldPolicy<any> | FieldReadFunction<any>,
	createStage?: FieldPolicy<any> | FieldReadFunction<any>,
	createSystemSidebarElement?: FieldPolicy<any> | FieldReadFunction<any>,
	createUnionField?: FieldPolicy<any> | FieldReadFunction<any>,
	createUnpublishContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	createUpdateContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	createViewGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	createWebhook?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApp?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAppInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteComponent?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteContentView?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEnumeration?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteExtension?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteField?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteGatsbyCloudIntegration?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteLocale?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteModel?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNetlifyIntegration?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePermanentAuthToken?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProject?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRemoteSource?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRole?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSidebarElement?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteStage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteViewGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWebhook?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicateComponent?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicateModel?: FieldPolicy<any> | FieldReadFunction<any>,
	leaveProject?: FieldPolicy<any> | FieldReadFunction<any>,
	leaveTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	moveContentView?: FieldPolicy<any> | FieldReadFunction<any>,
	moveField?: FieldPolicy<any> | FieldReadFunction<any>,
	moveSidebarElement?: FieldPolicy<any> | FieldReadFunction<any>,
	moveViewGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	promoteEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	removeMember?: FieldPolicy<any> | FieldReadFunction<any>,
	resetSidebarElements?: FieldPolicy<any> | FieldReadFunction<any>,
	retriggerWebhook?: FieldPolicy<any> | FieldReadFunction<any>,
	revokeInvite?: FieldPolicy<any> | FieldReadFunction<any>,
	sendFeedback?: FieldPolicy<any> | FieldReadFunction<any>,
	sendInvite?: FieldPolicy<any> | FieldReadFunction<any>,
	setUserAnalytics?: FieldPolicy<any> | FieldReadFunction<any>,
	setUserPreferences?: FieldPolicy<any> | FieldReadFunction<any>,
	startTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	submitBatchChanges?: FieldPolicy<any> | FieldReadFunction<any>,
	switchPaymentSubscription?: FieldPolicy<any> | FieldReadFunction<any>,
	track?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerNetlifyIntegrationBuild?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApp?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAppInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	updateComponent?: FieldPolicy<any> | FieldReadFunction<any>,
	updateComponentField?: FieldPolicy<any> | FieldReadFunction<any>,
	updateComponentUnionField?: FieldPolicy<any> | FieldReadFunction<any>,
	updateContentPermissionEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	updateContentView?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCreateContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDeleteContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnumerableField?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnumeration?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFieldExtension?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFilestackSecurityOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	updateGatsbyCloudIntegration?: FieldPolicy<any> | FieldReadFunction<any>,
	updateGraphQLRemoteSource?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLocale?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMemberRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	updateModel?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNetlifyIntegration?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePermanentAuthToken?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProject?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePublicEndpoint?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePublishContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRESTRemoteSource?: FieldPolicy<any> | FieldReadFunction<any>,
	updateReadContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	updateReadVersionContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRelationalField?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRemoteField?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRole?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSidebarElement?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSidebarExtension?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSimpleField?: FieldPolicy<any> | FieldReadFunction<any>,
	updateStage?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUnionField?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUnpublishContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUpdateContentPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	updateViewGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWebhook?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NetlifyIntegrationKeySpecifier = ('createdAt' | 'description' | 'displayName' | 'id' | 'models' | 'sites' | 'updatedAt' | NetlifyIntegrationKeySpecifier)[];
export type NetlifyIntegrationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	models?: FieldPolicy<any> | FieldReadFunction<any>,
	sites?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NetlifyIntegrationCallbackPayloadKeySpecifier = ('error' | 'integration' | 'integrationId' | 'site' | NetlifyIntegrationCallbackPayloadKeySpecifier)[];
export type NetlifyIntegrationCallbackPayloadFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	integration?: FieldPolicy<any> | FieldReadFunction<any>,
	integrationId?: FieldPolicy<any> | FieldReadFunction<any>,
	site?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NetlifySiteKeySpecifier = ('displayName' | 'id' | 'lastState' | 'url' | NetlifySiteKeySpecifier)[];
export type NetlifySiteFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastState?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NetlifyStateKeySpecifier = ('buildFinishedAt' | 'buildPreparedAt' | 'buildStartedAt' | 'buildState' | 'triggeredBy' | NetlifyStateKeySpecifier)[];
export type NetlifyStateFieldPolicy = {
	buildFinishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	buildPreparedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	buildStartedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	buildState?: FieldPolicy<any> | FieldReadFunction<any>,
	triggeredBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderByKeySpecifier = ('orderByField' | 'orderDir' | OrderByKeySpecifier)[];
export type OrderByFieldPolicy = {
	orderByField?: FieldPolicy<any> | FieldReadFunction<any>,
	orderDir?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageAppElementKeySpecifier = ('apiId' | 'app' | 'config' | 'createdAt' | 'description' | 'id' | 'name' | 'src' | 'type' | 'updatedAt' | PageAppElementKeySpecifier)[];
export type PageAppElementFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | 'pageSize' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentAccountKeySpecifier = ('accountManagementUrl' | 'accountName' | 'createdAt' | 'description' | 'hostedBillingUrl' | 'hostedPageUrl' | 'id' | 'isClosed' | 'isMain' | 'paymentSubscriptions' | 'updatedAt' | 'user' | PaymentAccountKeySpecifier)[];
export type PaymentAccountFieldPolicy = {
	accountManagementUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	accountName?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	hostedBillingUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	hostedPageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isClosed?: FieldPolicy<any> | FieldReadFunction<any>,
	isMain?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentSubscriptionKeySpecifier = ('billingPeriod' | 'createdAt' | 'id' | 'identifier' | 'isCanceled' | 'paymentAccount' | 'plan' | 'projects' | 'renewsAt' | 'updatedAt' | PaymentSubscriptionKeySpecifier)[];
export type PaymentSubscriptionFieldPolicy = {
	billingPeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	isCanceled?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	plan?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	renewsAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermanentAuthTokenKeySpecifier = ('contentPermissions' | 'createdAt' | 'defaults' | 'description' | 'id' | 'managementPermissions' | 'name' | 'token' | 'updatedAt' | PermanentAuthTokenKeySpecifier)[];
export type PermanentAuthTokenFieldPolicy = {
	contentPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	defaults?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managementPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermanentAuthTokenDefaultsKeySpecifier = ('stage' | PermanentAuthTokenDefaultsKeySpecifier)[];
export type PermanentAuthTokenDefaultsFieldPolicy = {
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlanKeySpecifier = ('billingPeriodMonths' | 'createdAt' | 'displayName' | 'id' | 'isEnterprise' | 'isFree' | 'isSwitchable' | 'limits' | 'name' | 'price' | 'updatedAt' | PlanKeySpecifier)[];
export type PlanFieldPolicy = {
	billingPeriodMonths?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnterprise?: FieldPolicy<any> | FieldReadFunction<any>,
	isFree?: FieldPolicy<any> | FieldReadFunction<any>,
	isSwitchable?: FieldPolicy<any> | FieldReadFunction<any>,
	limits?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileKeySpecifier = ('companyName' | 'companySize' | 'email' | 'id' | 'name' | 'picture' | 'purpose' | 'role' | ProfileKeySpecifier)[];
export type ProfileFieldPolicy = {
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	companySize?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	purpose?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgressKeySpecifier = ('current' | 'estimate' | 'max' | 'percent' | ProgressKeySpecifier)[];
export type ProgressFieldPolicy = {
	current?: FieldPolicy<any> | FieldReadFunction<any>,
	estimate?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	percent?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectKeySpecifier = ('auditLogs' | 'availableManagementPermissions' | 'cloningProjects' | 'createdAt' | 'defaultPaginationSize' | 'description' | 'environment' | 'environments' | 'existingRole' | 'existingRoles' | 'id' | 'inTrial' | 'invites' | 'isCloning' | 'lifecycle' | 'maxPaginationSize' | 'members' | 'membersConnection' | 'meta' | 'name' | 'owner' | 'picture' | 'publicCloneAccess' | 'quotas' | 'region' | 'subscription' | 'trialExpiresIn' | 'updatedAt' | 'viewerAsMember' | ProjectKeySpecifier)[];
export type ProjectFieldPolicy = {
	auditLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	availableManagementPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	cloningProjects?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultPaginationSize?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	environments?: FieldPolicy<any> | FieldReadFunction<any>,
	existingRole?: FieldPolicy<any> | FieldReadFunction<any>,
	existingRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	invites?: FieldPolicy<any> | FieldReadFunction<any>,
	isCloning?: FieldPolicy<any> | FieldReadFunction<any>,
	lifecycle?: FieldPolicy<any> | FieldReadFunction<any>,
	maxPaginationSize?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	membersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	publicCloneAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	quotas?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	subscription?: FieldPolicy<any> | FieldReadFunction<any>,
	trialExpiresIn?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerAsMember?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectChangeCompletedCloningKeySpecifier = ('clonedProject' | ProjectChangeCompletedCloningKeySpecifier)[];
export type ProjectChangeCompletedCloningFieldPolicy = {
	clonedProject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PromoteEnvironmentPayloadKeySpecifier = ('previousMasterEnvironment' | 'promotedEnvironment' | PromoteEnvironmentPayloadKeySpecifier)[];
export type PromoteEnvironmentPayloadFieldPolicy = {
	previousMasterEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	promotedEnvironment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicCloneAccessKeySpecifier = ('enabled' | 'id' | 'includeContent' | 'includeWebhooks' | PublicCloneAccessKeySpecifier)[];
export type PublicCloneAccessFieldPolicy = {
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includeContent?: FieldPolicy<any> | FieldReadFunction<any>,
	includeWebhooks?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicContentAPIKeySpecifier = ('contentPermissions' | 'defaults' | PublicContentAPIKeySpecifier)[];
export type PublicContentAPIFieldPolicy = {
	contentPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	defaults?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicContentAPIDefautsKeySpecifier = ('stage' | PublicContentAPIDefautsKeySpecifier)[];
export type PublicContentAPIDefautsFieldPolicy = {
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublishContentPermissionKeySpecifier = ('condition' | 'createdAt' | 'enabled' | 'fromStages' | 'id' | 'locales' | 'model' | 'target' | 'toStages' | 'updatedAt' | PublishContentPermissionKeySpecifier)[];
export type PublishContentPermissionFieldPolicy = {
	condition?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	fromStages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locales?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	toStages?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('_viewer' | 'metaInfo' | 'viewer' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_viewer?: FieldPolicy<any> | FieldReadFunction<any>,
	metaInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QuotaKeySpecifier = ('apiOperations' | 'assetTraffic' | 'environments' | 'records' | 'roles' | 'seats' | QuotaKeySpecifier)[];
export type QuotaFieldPolicy = {
	apiOperations?: FieldPolicy<any> | FieldReadFunction<any>,
	assetTraffic?: FieldPolicy<any> | FieldReadFunction<any>,
	environments?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	seats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RESTRemoteSourceKeySpecifier = ('createdAt' | 'debugEnabled' | 'description' | 'displayName' | 'headers' | 'id' | 'prefix' | 'remoteTypeDefinitionsConnection' | 'type' | 'updatedAt' | 'url' | RESTRemoteSourceKeySpecifier)[];
export type RESTRemoteSourceFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	debugEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	headers?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteTypeDefinitionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReadContentPermissionKeySpecifier = ('condition' | 'createdAt' | 'enabled' | 'id' | 'locales' | 'model' | 'stages' | 'target' | 'updatedAt' | ReadContentPermissionKeySpecifier)[];
export type ReadContentPermissionFieldPolicy = {
	condition?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locales?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	stages?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReadVersionContentPermissionKeySpecifier = ('createdAt' | 'enabled' | 'id' | 'model' | 'target' | 'updatedAt' | ReadVersionContentPermissionKeySpecifier)[];
export type ReadVersionContentPermissionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegionKeySpecifier = ('id' | 'isBeta' | 'isReadOnly' | 'name' | 'pingUrl' | RegionKeySpecifier)[];
export type RegionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isBeta?: FieldPolicy<any> | FieldReadFunction<any>,
	isReadOnly?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	pingUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RelationalFieldKeySpecifier = ('apiId' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'extensions' | 'formConfig' | 'id' | 'isHidden' | 'isList' | 'isRequired' | 'isSystem' | 'meta' | 'model' | 'parent' | 'position' | 'relatedField' | 'relatedModel' | 'tableConfig' | 'type' | 'updatedAt' | 'visibility' | RelationalFieldKeySpecifier)[];
export type RelationalFieldFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	formConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>,
	isList?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedField?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedModel?: FieldPolicy<any> | FieldReadFunction<any>,
	tableConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoteFieldKeySpecifier = ('apiId' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'extensions' | 'formConfig' | 'id' | 'inputArgs' | 'isHidden' | 'isList' | 'isRequired' | 'isSystem' | 'meta' | 'model' | 'parent' | 'position' | 'remoteConfig' | 'tableConfig' | 'type' | 'updatedAt' | 'visibility' | RemoteFieldKeySpecifier)[];
export type RemoteFieldFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	formConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inputArgs?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>,
	isList?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	tableConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoteTypeDefinitionKeySpecifier = ('apiId' | 'createdAt' | 'graphqlType' | 'id' | 'isSystem' | 'sdl' | 'updatedAt' | RemoteTypeDefinitionKeySpecifier)[];
export type RemoteTypeDefinitionFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	graphqlType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	sdl?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoteTypeDefinitionEdgeKeySpecifier = ('node' | RemoteTypeDefinitionEdgeKeySpecifier)[];
export type RemoteTypeDefinitionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoteTypeDefinitionsAggregateKeySpecifier = ('count' | RemoteTypeDefinitionsAggregateKeySpecifier)[];
export type RemoteTypeDefinitionsAggregateFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoteTypeDefinitionsConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | RemoteTypeDefinitionsConnectionKeySpecifier)[];
export type RemoteTypeDefinitionsConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveMemberPayloadKeySpecifier = ('removedMemberId' | RemoveMemberPayloadKeySpecifier)[];
export type RemoveMemberPayloadFieldPolicy = {
	removedMemberId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetSidebarElementsPayloadKeySpecifier = ('model' | ResetSidebarElementsPayloadKeySpecifier)[];
export type ResetSidebarElementsPayloadFieldPolicy = {
	model?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RestRemoteFieldConfigKeySpecifier = ('cacheTTLSeconds' | 'forwardClientHeaders' | 'headers' | 'method' | 'path' | 'remoteSource' | 'returnType' | RestRemoteFieldConfigKeySpecifier)[];
export type RestRemoteFieldConfigFieldPolicy = {
	cacheTTLSeconds?: FieldPolicy<any> | FieldReadFunction<any>,
	forwardClientHeaders?: FieldPolicy<any> | FieldReadFunction<any>,
	headers?: FieldPolicy<any> | FieldReadFunction<any>,
	method?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteSource?: FieldPolicy<any> | FieldReadFunction<any>,
	returnType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RetriggerWebhookPayloadKeySpecifier = ('logId' | RetriggerWebhookPayloadKeySpecifier)[];
export type RetriggerWebhookPayloadFieldPolicy = {
	logId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevokeInvitePayloadKeySpecifier = ('revokedInviteId' | RevokeInvitePayloadKeySpecifier)[];
export type RevokeInvitePayloadFieldPolicy = {
	revokedInviteId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleKeySpecifier = ('contentPermissions' | 'createdAt' | 'description' | 'id' | 'isDefault' | 'managementPermissions' | 'members' | 'membersConnection' | 'name' | 'updatedAt' | RoleKeySpecifier)[];
export type RoleFieldPolicy = {
	contentPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	managementPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	membersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SchedulingModelKeySpecifier = ('apiId' | 'apiIdPlural' | 'contentViews' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'environment' | 'field' | 'fields' | 'hasContent' | 'hasLocalizedComponents' | 'id' | 'isLocalized' | 'isSystem' | 'isVersioned' | 'sidebarElements' | 'titleFields' | 'updatedAt' | 'viewerPermission' | SchedulingModelKeySpecifier)[];
export type SchedulingModelFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	apiIdPlural?: FieldPolicy<any> | FieldReadFunction<any>,
	contentViews?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	hasContent?: FieldPolicy<any> | FieldReadFunction<any>,
	hasLocalizedComponents?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocalized?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	isVersioned?: FieldPolicy<any> | FieldReadFunction<any>,
	sidebarElements?: FieldPolicy<any> | FieldReadFunction<any>,
	titleFields?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerPermission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SchemaMigrationSubscriptionPayloadKeySpecifier = ('migration' | SchemaMigrationSubscriptionPayloadKeySpecifier)[];
export type SchemaMigrationSubscriptionPayloadFieldPolicy = {
	migration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SchemaMigrationSucceededSubscriptionPayloadKeySpecifier = ('affectedResourceId' | 'affectedResourceType' | 'environment' | 'migration' | SchemaMigrationSucceededSubscriptionPayloadKeySpecifier)[];
export type SchemaMigrationSucceededSubscriptionPayloadFieldPolicy = {
	affectedResourceId?: FieldPolicy<any> | FieldReadFunction<any>,
	affectedResourceType?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	migration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendInvitePayloadKeySpecifier = ('invite' | SendInvitePayloadKeySpecifier)[];
export type SendInvitePayloadFieldPolicy = {
	invite?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SidebarExtensionKeySpecifier = ('apiId' | 'config' | 'createdAt' | 'createdBy' | 'description' | 'environment' | 'id' | 'isActive' | 'meta' | 'name' | 'neededPermissions' | 'sidebarElements' | 'src' | 'srcType' | 'updatedAt' | 'updatedBy' | SidebarExtensionKeySpecifier)[];
export type SidebarExtensionFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	neededPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	sidebarElements?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	srcType?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimpleFieldKeySpecifier = ('apiId' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'embeddableModels' | 'embedsEnabled' | 'extensions' | 'formConfig' | 'id' | 'initialValue' | 'isHidden' | 'isList' | 'isLocalized' | 'isRequired' | 'isSystem' | 'isTitle' | 'isUnique' | 'meta' | 'model' | 'parent' | 'position' | 'tableConfig' | 'type' | 'updatedAt' | 'validations' | 'visibility' | SimpleFieldKeySpecifier)[];
export type SimpleFieldFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	embeddableModels?: FieldPolicy<any> | FieldReadFunction<any>,
	embedsEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	formConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initialValue?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>,
	isList?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocalized?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	isTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	isUnique?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	tableConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	validations?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StageKeySpecifier = ('apiId' | 'backgroundColor' | 'color' | 'colorPaletteId' | 'createdAt' | 'description' | 'displayName' | 'id' | 'isSystem' | 'position' | 'updatedAt' | StageKeySpecifier)[];
export type StageFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	backgroundColor?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	colorPaletteId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StageFilestackSecurityOptionsKeySpecifier = ('expires' | 'stage' | StageFilestackSecurityOptionsKeySpecifier)[];
export type StageFilestackSecurityOptionsFieldPolicy = {
	expires?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StartTrialPayloadKeySpecifier = ('project' | StartTrialPayloadKeySpecifier)[];
export type StartTrialPayloadFieldPolicy = {
	project?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StarterTemplateKeySpecifier = ('coverPicture' | 'description' | 'details' | 'id' | 'name' | 'picture' | 'resources' | 'stack' | StarterTemplateKeySpecifier)[];
export type StarterTemplateFieldPolicy = {
	coverPicture?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>,
	stack?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatsKeySpecifier = ('time' | 'value' | StatsKeySpecifier)[];
export type StatsFieldPolicy = {
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StringFieldValidationsKeySpecifier = ('characters' | 'listItemCount' | 'matches' | 'notMatches' | StringFieldValidationsKeySpecifier)[];
export type StringFieldValidationsFieldPolicy = {
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	listItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	matches?: FieldPolicy<any> | FieldReadFunction<any>,
	notMatches?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('environmentPromoted' | 'netlifyBuildNotification' | 'projectChanged' | 'schemaMigration' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	environmentPromoted?: FieldPolicy<any> | FieldReadFunction<any>,
	netlifyBuildNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	projectChanged?: FieldPolicy<any> | FieldReadFunction<any>,
	schemaMigration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SwitchPaymentSubscriptionPayloadKeySpecifier = ('project' | 'subscription' | SwitchPaymentSubscriptionPayloadKeySpecifier)[];
export type SwitchPaymentSubscriptionPayloadFieldPolicy = {
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	subscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SystemSidebarElementKeySpecifier = ('config' | 'createdAt' | 'description' | 'displayName' | 'id' | 'isEnabled' | 'model' | 'position' | 'type' | 'updatedAt' | SystemSidebarElementKeySpecifier)[];
export type SystemSidebarElementFieldPolicy = {
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyStackKeySpecifier = ('image' | 'title' | 'url' | TechnologyStackKeySpecifier)[];
export type TechnologyStackFieldPolicy = {
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateKeySpecifier = ('coverPicture' | 'description' | 'details' | 'id' | 'name' | 'picture' | 'resources' | TemplateKeySpecifier)[];
export type TemplateFieldPolicy = {
	coverPicture?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateResourceKeySpecifier = ('title' | 'url' | TemplateResourceKeySpecifier)[];
export type TemplateResourceFieldPolicy = {
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenViewerKeySpecifier = ('availableExtensionPermissions' | 'availableExtensionSrcTypes' | 'availableIntegrations' | 'id' | 'plans' | 'project' | 'regions' | 'templates' | TokenViewerKeySpecifier)[];
export type TokenViewerFieldPolicy = {
	availableExtensionPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	availableExtensionSrcTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	availableIntegrations?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	plans?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	regions?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TrackPayloadKeySpecifier = ('success' | TrackPayloadKeySpecifier)[];
export type TrackPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TriggerNetlifyIntegrationBuildPayloadKeySpecifier = ('integration' | TriggerNetlifyIntegrationBuildPayloadKeySpecifier)[];
export type TriggerNetlifyIntegrationBuildPayloadFieldPolicy = {
	integration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UniDirectionalRelationalFieldKeySpecifier = ('apiId' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'extensions' | 'formConfig' | 'id' | 'isHidden' | 'isList' | 'isRequired' | 'isSystem' | 'meta' | 'model' | 'parent' | 'position' | 'relatedModel' | 'tableConfig' | 'type' | 'updatedAt' | 'visibility' | UniDirectionalRelationalFieldKeySpecifier)[];
export type UniDirectionalRelationalFieldFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	formConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>,
	isList?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedModel?: FieldPolicy<any> | FieldReadFunction<any>,
	tableConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnionKeySpecifier = ('apiId' | 'description' | 'displayName' | 'field' | 'id' | 'memberTypes' | UnionKeySpecifier)[];
export type UnionFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	memberTypes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnionFieldKeySpecifier = ('apiId' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'extensions' | 'formConfig' | 'id' | 'isHidden' | 'isList' | 'isMemberType' | 'isSystem' | 'meta' | 'model' | 'parent' | 'position' | 'tableConfig' | 'type' | 'union' | 'updatedAt' | 'visibility' | UnionFieldKeySpecifier)[];
export type UnionFieldFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	extensions?: FieldPolicy<any> | FieldReadFunction<any>,
	formConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>,
	isList?: FieldPolicy<any> | FieldReadFunction<any>,
	isMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	tableConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	union?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnpublishContentPermissionKeySpecifier = ('condition' | 'createdAt' | 'enabled' | 'id' | 'locales' | 'model' | 'stages' | 'target' | 'updatedAt' | UnpublishContentPermissionKeySpecifier)[];
export type UnpublishContentPermissionFieldPolicy = {
	condition?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locales?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	stages?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateAppInstallationPayloadKeySpecifier = ('updatedAppInstallation' | UpdateAppInstallationPayloadKeySpecifier)[];
export type UpdateAppInstallationPayloadFieldPolicy = {
	updatedAppInstallation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateAppPayloadKeySpecifier = ('updatedApp' | UpdateAppPayloadKeySpecifier)[];
export type UpdateAppPayloadFieldPolicy = {
	updatedApp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateContentPermissionKeySpecifier = ('condition' | 'createdAt' | 'enabled' | 'id' | 'locales' | 'model' | 'target' | 'updatedAt' | UpdateContentPermissionKeySpecifier)[];
export type UpdateContentPermissionFieldPolicy = {
	condition?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locales?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateContentPermissionEnabledPayloadKeySpecifier = ('permission' | UpdateContentPermissionEnabledPayloadKeySpecifier)[];
export type UpdateContentPermissionEnabledPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateContentViewPayloadKeySpecifier = ('updatedContentView' | UpdateContentViewPayloadKeySpecifier)[];
export type UpdateContentViewPayloadFieldPolicy = {
	updatedContentView?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCreateContentPermissionPayloadKeySpecifier = ('permission' | UpdateCreateContentPermissionPayloadKeySpecifier)[];
export type UpdateCreateContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateDeleteContentPermissionPayloadKeySpecifier = ('permission' | UpdateDeleteContentPermissionPayloadKeySpecifier)[];
export type UpdateDeleteContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnvironmentPayloadKeySpecifier = ('updatedEnvironment' | UpdateEnvironmentPayloadKeySpecifier)[];
export type UpdateEnvironmentPayloadFieldPolicy = {
	updatedEnvironment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateFieldExtensionPayloadKeySpecifier = ('updatedExtension' | UpdateFieldExtensionPayloadKeySpecifier)[];
export type UpdateFieldExtensionPayloadFieldPolicy = {
	updatedExtension?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateFilestackSecurityOptionsPayloadKeySpecifier = ('updatedEnvironment' | 'updatedFilestack' | UpdateFilestackSecurityOptionsPayloadKeySpecifier)[];
export type UpdateFilestackSecurityOptionsPayloadFieldPolicy = {
	updatedEnvironment?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFilestack?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateGatsbyCloudIntegrationPayloadKeySpecifier = ('updatedGatsbyCloudIntegration' | UpdateGatsbyCloudIntegrationPayloadKeySpecifier)[];
export type UpdateGatsbyCloudIntegrationPayloadFieldPolicy = {
	updatedGatsbyCloudIntegration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateNetlifyIntegrationPayloadKeySpecifier = ('updatedNetlifyIntegration' | UpdateNetlifyIntegrationPayloadKeySpecifier)[];
export type UpdateNetlifyIntegrationPayloadFieldPolicy = {
	updatedNetlifyIntegration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePermanentAuthTokenPayloadKeySpecifier = ('updatedPermanentAuthToken' | UpdatePermanentAuthTokenPayloadKeySpecifier)[];
export type UpdatePermanentAuthTokenPayloadFieldPolicy = {
	updatedPermanentAuthToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePublicPermissionsPayloadKeySpecifier = ('environment' | UpdatePublicPermissionsPayloadKeySpecifier)[];
export type UpdatePublicPermissionsPayloadFieldPolicy = {
	environment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePublishContentPermissionPayloadKeySpecifier = ('permission' | UpdatePublishContentPermissionPayloadKeySpecifier)[];
export type UpdatePublishContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateReadContentPermissionPayloadKeySpecifier = ('permission' | UpdateReadContentPermissionPayloadKeySpecifier)[];
export type UpdateReadContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateReadVersionContentPermissionPayloadKeySpecifier = ('permission' | UpdateReadVersionContentPermissionPayloadKeySpecifier)[];
export type UpdateReadVersionContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSidebarElementPayloadKeySpecifier = ('updatedSidebarElement' | UpdateSidebarElementPayloadKeySpecifier)[];
export type UpdateSidebarElementPayloadFieldPolicy = {
	updatedSidebarElement?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSidebarExtensionPayloadKeySpecifier = ('updatedExtension' | UpdateSidebarExtensionPayloadKeySpecifier)[];
export type UpdateSidebarExtensionPayloadFieldPolicy = {
	updatedExtension?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUnpublishContentPermissionPayloadKeySpecifier = ('permission' | UpdateUnpublishContentPermissionPayloadKeySpecifier)[];
export type UpdateUnpublishContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUpdateContentPermissionPayloadKeySpecifier = ('permission' | UpdateUpdateContentPermissionPayloadKeySpecifier)[];
export type UpdateUpdateContentPermissionPayloadFieldPolicy = {
	permission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateViewGroupPayloadKeySpecifier = ('updatedViewGroup' | UpdateViewGroupPayloadKeySpecifier)[];
export type UpdateViewGroupPayloadFieldPolicy = {
	updatedViewGroup?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateWebhookPayloadKeySpecifier = ('updatedWebhook' | UpdateWebhookPayloadKeySpecifier)[];
export type UpdateWebhookPayloadFieldPolicy = {
	updatedWebhook?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpsertTemplatePayloadKeySpecifier = ('gcms' | UpsertTemplatePayloadKeySpecifier)[];
export type UpsertTemplatePayloadFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('createdAt' | 'id' | 'preferences' | 'profile' | 'updatedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	preferences?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAnalyticsKeySpecifier = ('conversionPage' | 'createdAt' | 'gclid' | 'hubspotutk' | 'id' | 'landingPage' | 'referrer' | 'updatedAt' | 'utmCampaign' | 'utmContent' | 'utmMedium' | 'utmSource' | 'utmTerm' | UserAnalyticsKeySpecifier)[];
export type UserAnalyticsFieldPolicy = {
	conversionPage?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	gclid?: FieldPolicy<any> | FieldReadFunction<any>,
	hubspotutk?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	landingPage?: FieldPolicy<any> | FieldReadFunction<any>,
	referrer?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	utmCampaign?: FieldPolicy<any> | FieldReadFunction<any>,
	utmContent?: FieldPolicy<any> | FieldReadFunction<any>,
	utmMedium?: FieldPolicy<any> | FieldReadFunction<any>,
	utmSource?: FieldPolicy<any> | FieldReadFunction<any>,
	utmTerm?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserModelKeySpecifier = ('apiId' | 'apiIdPlural' | 'contentViews' | 'createdAt' | 'createdBy' | 'description' | 'displayName' | 'environment' | 'field' | 'fields' | 'hasContent' | 'hasLocalizedComponents' | 'id' | 'isLocalized' | 'isSystem' | 'isVersioned' | 'sidebarElements' | 'titleFields' | 'updatedAt' | 'viewerPermission' | UserModelKeySpecifier)[];
export type UserModelFieldPolicy = {
	apiId?: FieldPolicy<any> | FieldReadFunction<any>,
	apiIdPlural?: FieldPolicy<any> | FieldReadFunction<any>,
	contentViews?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	hasContent?: FieldPolicy<any> | FieldReadFunction<any>,
	hasLocalizedComponents?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocalized?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	isVersioned?: FieldPolicy<any> | FieldReadFunction<any>,
	sidebarElements?: FieldPolicy<any> | FieldReadFunction<any>,
	titleFields?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewerPermission?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPreferencesKeySpecifier = ('preferences' | UserPreferencesKeySpecifier)[];
export type UserPreferencesFieldPolicy = {
	preferences?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserViewerKeySpecifier = ('app' | 'apps' | 'availableExtensionPermissions' | 'availableExtensionSrcTypes' | 'availableIntegrations' | 'commonAssetConfig' | 'id' | 'paymentAccount' | 'paymentAccounts' | 'pendingInvite' | 'pendingInvites' | 'pendingProject' | 'pendingProjects' | 'plans' | 'project' | 'projects' | 'regions' | 'templates' | 'user' | UserViewerKeySpecifier)[];
export type UserViewerFieldPolicy = {
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	apps?: FieldPolicy<any> | FieldReadFunction<any>,
	availableExtensionPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	availableExtensionSrcTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	availableIntegrations?: FieldPolicy<any> | FieldReadFunction<any>,
	commonAssetConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingInvite?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingInvites?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingProject?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingProjects?: FieldPolicy<any> | FieldReadFunction<any>,
	plans?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	regions?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ViewGroupKeySpecifier = ('contentType' | 'contentViews' | 'createdAt' | 'createdBy' | 'description' | 'environment' | 'id' | 'name' | 'position' | 'type' | 'updatedAt' | ViewGroupKeySpecifier)[];
export type ViewGroupFieldPolicy = {
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	contentViews?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ViewerKeySpecifier = ('availableExtensionPermissions' | 'availableExtensionSrcTypes' | 'availableIntegrations' | 'createdAt' | 'id' | 'paymentAccount' | 'paymentAccounts' | 'pendingInvite' | 'pendingInvites' | 'plans' | 'preferences' | 'profile' | 'project' | 'projects' | 'regions' | 'templates' | 'updatedAt' | ViewerKeySpecifier)[];
export type ViewerFieldPolicy = {
	availableExtensionPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	availableExtensionSrcTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	availableIntegrations?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingInvite?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingInvites?: FieldPolicy<any> | FieldReadFunction<any>,
	plans?: FieldPolicy<any> | FieldReadFunction<any>,
	preferences?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	regions?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookKeySpecifier = ('createdAt' | 'createdBy' | 'description' | 'environment' | 'hasSecretKey' | 'headers' | 'id' | 'includePayload' | 'isActive' | 'isSystem' | 'log' | 'logs' | 'method' | 'models' | 'name' | 'stages' | 'triggerActions' | 'triggerSources' | 'triggerType' | 'updatedAt' | 'url' | WebhookKeySpecifier)[];
export type WebhookFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	environment?: FieldPolicy<any> | FieldReadFunction<any>,
	hasSecretKey?: FieldPolicy<any> | FieldReadFunction<any>,
	headers?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includePayload?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	isSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	log?: FieldPolicy<any> | FieldReadFunction<any>,
	logs?: FieldPolicy<any> | FieldReadFunction<any>,
	method?: FieldPolicy<any> | FieldReadFunction<any>,
	models?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	stages?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerActions?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerSources?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerType?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookLogKeySpecifier = ('attempts' | 'calledAt' | 'duration' | 'id' | 'model' | 'requestPayload' | 'responsePayload' | 'responsePayloadSize' | 'statusCode' | 'triggerAction' | WebhookLogKeySpecifier)[];
export type WebhookLogFieldPolicy = {
	attempts?: FieldPolicy<any> | FieldReadFunction<any>,
	calledAt?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	requestPayload?: FieldPolicy<any> | FieldReadFunction<any>,
	responsePayload?: FieldPolicy<any> | FieldReadFunction<any>,
	responsePayloadSize?: FieldPolicy<any> | FieldReadFunction<any>,
	statusCode?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerAction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookLogsPayloadKeySpecifier = ('entries' | 'total' | WebhookLogsPayloadKeySpecifier)[];
export type WebhookLogsPayloadFieldPolicy = {
	entries?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _BookOverLimitAddonUsageKeySpecifier = ('gcms' | _BookOverLimitAddonUsageKeySpecifier)[];
export type _BookOverLimitAddonUsageFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _BookOverLimitPayloadKeySpecifier = ('gcms' | _BookOverLimitPayloadKeySpecifier)[];
export type _BookOverLimitPayloadFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _DeleteAccountPayloadKeySpecifier = ('gcms' | _DeleteAccountPayloadKeySpecifier)[];
export type _DeleteAccountPayloadFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _GetUserPayloadKeySpecifier = ('gcms' | _GetUserPayloadKeySpecifier)[];
export type _GetUserPayloadFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _OverLimitProjectKeySpecifier = ('gcms' | _OverLimitProjectKeySpecifier)[];
export type _OverLimitProjectFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _OverLimitProjectAddonsKeySpecifier = ('gcms' | _OverLimitProjectAddonsKeySpecifier)[];
export type _OverLimitProjectAddonsFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _OverLimitProjectAddonsValuesKeySpecifier = ('gcms' | _OverLimitProjectAddonsValuesKeySpecifier)[];
export type _OverLimitProjectAddonsValuesFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _OverLimitProjectUsageKeySpecifier = ('gcms' | _OverLimitProjectUsageKeySpecifier)[];
export type _OverLimitProjectUsageFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ResetContentConfigPayloadKeySpecifier = ('gcms' | _ResetContentConfigPayloadKeySpecifier)[];
export type _ResetContentConfigPayloadFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _SwitchOwnerPayloadKeySpecifier = ('gcms' | _SwitchOwnerPayloadKeySpecifier)[];
export type _SwitchOwnerPayloadFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _UpdatePlanTrialPayloadKeySpecifier = ('gcms' | _UpdatePlanTrialPayloadKeySpecifier)[];
export type _UpdatePlanTrialPayloadFieldPolicy = {
	gcms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AcceptInvitePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AcceptInvitePayloadKeySpecifier | (() => undefined | AcceptInvitePayloadKeySpecifier),
		fields?: AcceptInvitePayloadFieldPolicy,
	},
	App?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppKeySpecifier | (() => undefined | AppKeySpecifier),
		fields?: AppFieldPolicy,
	},
	AppInstallation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppInstallationKeySpecifier | (() => undefined | AppInstallationKeySpecifier),
		fields?: AppInstallationFieldPolicy,
	},
	AppPermissions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppPermissionsKeySpecifier | (() => undefined | AppPermissionsKeySpecifier),
		fields?: AppPermissionsFieldPolicy,
	},
	AppSidebarElement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppSidebarElementKeySpecifier | (() => undefined | AppSidebarElementKeySpecifier),
		fields?: AppSidebarElementFieldPolicy,
	},
	AppToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppTokenKeySpecifier | (() => undefined | AppTokenKeySpecifier),
		fields?: AppTokenFieldPolicy,
	},
	AppTokenViewer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppTokenViewerKeySpecifier | (() => undefined | AppTokenViewerKeySpecifier),
		fields?: AppTokenViewerFieldPolicy,
	},
	AppWithSecrets?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppWithSecretsKeySpecifier | (() => undefined | AppWithSecretsKeySpecifier),
		fields?: AppWithSecretsFieldPolicy,
	},
	AssetModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetModelKeySpecifier | (() => undefined | AssetModelKeySpecifier),
		fields?: AssetModelFieldPolicy,
	},
	AsyncOperationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AsyncOperationPayloadKeySpecifier | (() => undefined | AsyncOperationPayloadKeySpecifier),
		fields?: AsyncOperationPayloadFieldPolicy,
	},
	AuditLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuditLogKeySpecifier | (() => undefined | AuditLogKeySpecifier),
		fields?: AuditLogFieldPolicy,
	},
	AuditLogsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuditLogsPayloadKeySpecifier | (() => undefined | AuditLogsPayloadKeySpecifier),
		fields?: AuditLogsPayloadFieldPolicy,
	},
	AvailableExtensionPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AvailableExtensionPermissionKeySpecifier | (() => undefined | AvailableExtensionPermissionKeySpecifier),
		fields?: AvailableExtensionPermissionFieldPolicy,
	},
	BillingPeriod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingPeriodKeySpecifier | (() => undefined | BillingPeriodKeySpecifier),
		fields?: BillingPeriodFieldPolicy,
	},
	CloningProject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CloningProjectKeySpecifier | (() => undefined | CloningProjectKeySpecifier),
		fields?: CloningProjectFieldPolicy,
	},
	CommentingConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentingConfigKeySpecifier | (() => undefined | CommentingConfigKeySpecifier),
		fields?: CommentingConfigFieldPolicy,
	},
	CommentingInfoPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentingInfoPayloadKeySpecifier | (() => undefined | CommentingInfoPayloadKeySpecifier),
		fields?: CommentingInfoPayloadFieldPolicy,
	},
	CommonFilestack?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommonFilestackKeySpecifier | (() => undefined | CommonFilestackKeySpecifier),
		fields?: CommonFilestackFieldPolicy,
	},
	CommonFilestackSecurityOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommonFilestackSecurityOptionsKeySpecifier | (() => undefined | CommonFilestackSecurityOptionsKeySpecifier),
		fields?: CommonFilestackSecurityOptionsFieldPolicy,
	},
	Component?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentKeySpecifier | (() => undefined | ComponentKeySpecifier),
		fields?: ComponentFieldPolicy,
	},
	ComponentField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentFieldKeySpecifier | (() => undefined | ComponentFieldKeySpecifier),
		fields?: ComponentFieldFieldPolicy,
	},
	ComponentUnionField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentUnionFieldKeySpecifier | (() => undefined | ComponentUnionFieldKeySpecifier),
		fields?: ComponentUnionFieldFieldPolicy,
	},
	ContentModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentModelKeySpecifier | (() => undefined | ContentModelKeySpecifier),
		fields?: ContentModelFieldPolicy,
	},
	ContentPermissionAppTokenTarget?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentPermissionAppTokenTargetKeySpecifier | (() => undefined | ContentPermissionAppTokenTargetKeySpecifier),
		fields?: ContentPermissionAppTokenTargetFieldPolicy,
	},
	ContentPermissionPermanentAuthTokenTarget?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentPermissionPermanentAuthTokenTargetKeySpecifier | (() => undefined | ContentPermissionPermanentAuthTokenTargetKeySpecifier),
		fields?: ContentPermissionPermanentAuthTokenTargetFieldPolicy,
	},
	ContentPermissionPublicTarget?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentPermissionPublicTargetKeySpecifier | (() => undefined | ContentPermissionPublicTargetKeySpecifier),
		fields?: ContentPermissionPublicTargetFieldPolicy,
	},
	ContentPermissionRoleTarget?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentPermissionRoleTargetKeySpecifier | (() => undefined | ContentPermissionRoleTargetKeySpecifier),
		fields?: ContentPermissionRoleTargetFieldPolicy,
	},
	ContentView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentViewKeySpecifier | (() => undefined | ContentViewKeySpecifier),
		fields?: ContentViewFieldPolicy,
	},
	ContentViewColumn?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentViewColumnKeySpecifier | (() => undefined | ContentViewColumnKeySpecifier),
		fields?: ContentViewColumnFieldPolicy,
	},
	CreateAppExchangeTokenPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateAppExchangeTokenPayloadKeySpecifier | (() => undefined | CreateAppExchangeTokenPayloadKeySpecifier),
		fields?: CreateAppExchangeTokenPayloadFieldPolicy,
	},
	CreateAppInstallationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateAppInstallationPayloadKeySpecifier | (() => undefined | CreateAppInstallationPayloadKeySpecifier),
		fields?: CreateAppInstallationPayloadFieldPolicy,
	},
	CreateAppPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateAppPayloadKeySpecifier | (() => undefined | CreateAppPayloadKeySpecifier),
		fields?: CreateAppPayloadFieldPolicy,
	},
	CreateAppSecretsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateAppSecretsPayloadKeySpecifier | (() => undefined | CreateAppSecretsPayloadKeySpecifier),
		fields?: CreateAppSecretsPayloadFieldPolicy,
	},
	CreateContentPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateContentPermissionKeySpecifier | (() => undefined | CreateContentPermissionKeySpecifier),
		fields?: CreateContentPermissionFieldPolicy,
	},
	CreateContentViewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateContentViewPayloadKeySpecifier | (() => undefined | CreateContentViewPayloadKeySpecifier),
		fields?: CreateContentViewPayloadFieldPolicy,
	},
	CreateCreateContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCreateContentPermissionPayloadKeySpecifier | (() => undefined | CreateCreateContentPermissionPayloadKeySpecifier),
		fields?: CreateCreateContentPermissionPayloadFieldPolicy,
	},
	CreateDeleteContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateDeleteContentPermissionPayloadKeySpecifier | (() => undefined | CreateDeleteContentPermissionPayloadKeySpecifier),
		fields?: CreateDeleteContentPermissionPayloadFieldPolicy,
	},
	CreateEnvironmentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateEnvironmentPayloadKeySpecifier | (() => undefined | CreateEnvironmentPayloadKeySpecifier),
		fields?: CreateEnvironmentPayloadFieldPolicy,
	},
	CreateFieldExtensionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateFieldExtensionPayloadKeySpecifier | (() => undefined | CreateFieldExtensionPayloadKeySpecifier),
		fields?: CreateFieldExtensionPayloadFieldPolicy,
	},
	CreateGatsbyCloudIntegrationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateGatsbyCloudIntegrationPayloadKeySpecifier | (() => undefined | CreateGatsbyCloudIntegrationPayloadKeySpecifier),
		fields?: CreateGatsbyCloudIntegrationPayloadFieldPolicy,
	},
	CreateNetlifyIntegrationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateNetlifyIntegrationPayloadKeySpecifier | (() => undefined | CreateNetlifyIntegrationPayloadKeySpecifier),
		fields?: CreateNetlifyIntegrationPayloadFieldPolicy,
	},
	CreatePermanentAuthTokenPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePermanentAuthTokenPayloadKeySpecifier | (() => undefined | CreatePermanentAuthTokenPayloadKeySpecifier),
		fields?: CreatePermanentAuthTokenPayloadFieldPolicy,
	},
	CreatePublishContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePublishContentPermissionPayloadKeySpecifier | (() => undefined | CreatePublishContentPermissionPayloadKeySpecifier),
		fields?: CreatePublishContentPermissionPayloadFieldPolicy,
	},
	CreateReadContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateReadContentPermissionPayloadKeySpecifier | (() => undefined | CreateReadContentPermissionPayloadKeySpecifier),
		fields?: CreateReadContentPermissionPayloadFieldPolicy,
	},
	CreateReadVersionContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateReadVersionContentPermissionPayloadKeySpecifier | (() => undefined | CreateReadVersionContentPermissionPayloadKeySpecifier),
		fields?: CreateReadVersionContentPermissionPayloadFieldPolicy,
	},
	CreateSidebarElementPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSidebarElementPayloadKeySpecifier | (() => undefined | CreateSidebarElementPayloadKeySpecifier),
		fields?: CreateSidebarElementPayloadFieldPolicy,
	},
	CreateSidebarExtensionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSidebarExtensionPayloadKeySpecifier | (() => undefined | CreateSidebarExtensionPayloadKeySpecifier),
		fields?: CreateSidebarExtensionPayloadFieldPolicy,
	},
	CreateUnpublishContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateUnpublishContentPermissionPayloadKeySpecifier | (() => undefined | CreateUnpublishContentPermissionPayloadKeySpecifier),
		fields?: CreateUnpublishContentPermissionPayloadFieldPolicy,
	},
	CreateUpdateContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateUpdateContentPermissionPayloadKeySpecifier | (() => undefined | CreateUpdateContentPermissionPayloadKeySpecifier),
		fields?: CreateUpdateContentPermissionPayloadFieldPolicy,
	},
	CreateUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateUserPayloadKeySpecifier | (() => undefined | CreateUserPayloadKeySpecifier),
		fields?: CreateUserPayloadFieldPolicy,
	},
	CreateViewGroupPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateViewGroupPayloadKeySpecifier | (() => undefined | CreateViewGroupPayloadKeySpecifier),
		fields?: CreateViewGroupPayloadFieldPolicy,
	},
	CreateWebhookPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateWebhookPayloadKeySpecifier | (() => undefined | CreateWebhookPayloadKeySpecifier),
		fields?: CreateWebhookPayloadFieldPolicy,
	},
	CustomSidebarElement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomSidebarElementKeySpecifier | (() => undefined | CustomSidebarElementKeySpecifier),
		fields?: CustomSidebarElementFieldPolicy,
	},
	DeleteAccountPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteAccountPayloadKeySpecifier | (() => undefined | DeleteAccountPayloadKeySpecifier),
		fields?: DeleteAccountPayloadFieldPolicy,
	},
	DeleteAppInstallationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteAppInstallationPayloadKeySpecifier | (() => undefined | DeleteAppInstallationPayloadKeySpecifier),
		fields?: DeleteAppInstallationPayloadFieldPolicy,
	},
	DeleteAppPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteAppPayloadKeySpecifier | (() => undefined | DeleteAppPayloadKeySpecifier),
		fields?: DeleteAppPayloadFieldPolicy,
	},
	DeleteContentPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteContentPermissionKeySpecifier | (() => undefined | DeleteContentPermissionKeySpecifier),
		fields?: DeleteContentPermissionFieldPolicy,
	},
	DeleteContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteContentPermissionPayloadKeySpecifier | (() => undefined | DeleteContentPermissionPayloadKeySpecifier),
		fields?: DeleteContentPermissionPayloadFieldPolicy,
	},
	DeleteContentViewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteContentViewPayloadKeySpecifier | (() => undefined | DeleteContentViewPayloadKeySpecifier),
		fields?: DeleteContentViewPayloadFieldPolicy,
	},
	DeleteEnvironmentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteEnvironmentPayloadKeySpecifier | (() => undefined | DeleteEnvironmentPayloadKeySpecifier),
		fields?: DeleteEnvironmentPayloadFieldPolicy,
	},
	DeleteExtensionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteExtensionPayloadKeySpecifier | (() => undefined | DeleteExtensionPayloadKeySpecifier),
		fields?: DeleteExtensionPayloadFieldPolicy,
	},
	DeleteGatsbyCloudIntegrationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteGatsbyCloudIntegrationPayloadKeySpecifier | (() => undefined | DeleteGatsbyCloudIntegrationPayloadKeySpecifier),
		fields?: DeleteGatsbyCloudIntegrationPayloadFieldPolicy,
	},
	DeleteNetlifyIntegrationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteNetlifyIntegrationPayloadKeySpecifier | (() => undefined | DeleteNetlifyIntegrationPayloadKeySpecifier),
		fields?: DeleteNetlifyIntegrationPayloadFieldPolicy,
	},
	DeletePermanentAuthTokenPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePermanentAuthTokenPayloadKeySpecifier | (() => undefined | DeletePermanentAuthTokenPayloadKeySpecifier),
		fields?: DeletePermanentAuthTokenPayloadFieldPolicy,
	},
	DeleteProjectPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteProjectPayloadKeySpecifier | (() => undefined | DeleteProjectPayloadKeySpecifier),
		fields?: DeleteProjectPayloadFieldPolicy,
	},
	DeleteRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteRolePayloadKeySpecifier | (() => undefined | DeleteRolePayloadKeySpecifier),
		fields?: DeleteRolePayloadFieldPolicy,
	},
	DeleteSidebarElementPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteSidebarElementPayloadKeySpecifier | (() => undefined | DeleteSidebarElementPayloadKeySpecifier),
		fields?: DeleteSidebarElementPayloadFieldPolicy,
	},
	DeleteViewGroupPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteViewGroupPayloadKeySpecifier | (() => undefined | DeleteViewGroupPayloadKeySpecifier),
		fields?: DeleteViewGroupPayloadFieldPolicy,
	},
	DeleteWebhookPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteWebhookPayloadKeySpecifier | (() => undefined | DeleteWebhookPayloadKeySpecifier),
		fields?: DeleteWebhookPayloadFieldPolicy,
	},
	DiffEnvironmentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiffEnvironmentPayloadKeySpecifier | (() => undefined | DiffEnvironmentPayloadKeySpecifier),
		fields?: DiffEnvironmentPayloadFieldPolicy,
	},
	EnumerableField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnumerableFieldKeySpecifier | (() => undefined | EnumerableFieldKeySpecifier),
		fields?: EnumerableFieldFieldPolicy,
	},
	Enumeration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnumerationKeySpecifier | (() => undefined | EnumerationKeySpecifier),
		fields?: EnumerationFieldPolicy,
	},
	EnumerationValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnumerationValueKeySpecifier | (() => undefined | EnumerationValueKeySpecifier),
		fields?: EnumerationValueFieldPolicy,
	},
	Environment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnvironmentKeySpecifier | (() => undefined | EnvironmentKeySpecifier),
		fields?: EnvironmentFieldPolicy,
	},
	EnvironmentLevelQuota?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnvironmentLevelQuotaKeySpecifier | (() => undefined | EnvironmentLevelQuotaKeySpecifier),
		fields?: EnvironmentLevelQuotaFieldPolicy,
	},
	EnvironmentPermissions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnvironmentPermissionsKeySpecifier | (() => undefined | EnvironmentPermissionsKeySpecifier),
		fields?: EnvironmentPermissionsFieldPolicy,
	},
	EnvironmentPromotedPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnvironmentPromotedPayloadKeySpecifier | (() => undefined | EnvironmentPromotedPayloadKeySpecifier),
		fields?: EnvironmentPromotedPayloadFieldPolicy,
	},
	ExtensionSidebarElement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExtensionSidebarElementKeySpecifier | (() => undefined | ExtensionSidebarElementKeySpecifier),
		fields?: ExtensionSidebarElementFieldPolicy,
	},
	ExtensionSrcType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExtensionSrcTypeKeySpecifier | (() => undefined | ExtensionSrcTypeKeySpecifier),
		fields?: ExtensionSrcTypeFieldPolicy,
	},
	Feedback?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeedbackKeySpecifier | (() => undefined | FeedbackKeySpecifier),
		fields?: FeedbackFieldPolicy,
	},
	FieldAppElement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldAppElementKeySpecifier | (() => undefined | FieldAppElementKeySpecifier),
		fields?: FieldAppElementFieldPolicy,
	},
	FieldConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldConfigKeySpecifier | (() => undefined | FieldConfigKeySpecifier),
		fields?: FieldConfigFieldPolicy,
	},
	FieldExtension?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldExtensionKeySpecifier | (() => undefined | FieldExtensionKeySpecifier),
		fields?: FieldExtensionFieldPolicy,
	},
	FieldInputArg?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldInputArgKeySpecifier | (() => undefined | FieldInputArgKeySpecifier),
		fields?: FieldInputArgFieldPolicy,
	},
	FieldValidationFloatRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldValidationFloatRangeKeySpecifier | (() => undefined | FieldValidationFloatRangeKeySpecifier),
		fields?: FieldValidationFloatRangeFieldPolicy,
	},
	FieldValidationIntRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldValidationIntRangeKeySpecifier | (() => undefined | FieldValidationIntRangeKeySpecifier),
		fields?: FieldValidationIntRangeFieldPolicy,
	},
	FieldValidationRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldValidationRangeKeySpecifier | (() => undefined | FieldValidationRangeKeySpecifier),
		fields?: FieldValidationRangeFieldPolicy,
	},
	FieldValidationRegEx?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldValidationRegExKeySpecifier | (() => undefined | FieldValidationRegExKeySpecifier),
		fields?: FieldValidationRegExFieldPolicy,
	},
	Filestack?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilestackKeySpecifier | (() => undefined | FilestackKeySpecifier),
		fields?: FilestackFieldPolicy,
	},
	FilestackSecurityAuthOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilestackSecurityAuthOptionsKeySpecifier | (() => undefined | FilestackSecurityAuthOptionsKeySpecifier),
		fields?: FilestackSecurityAuthOptionsFieldPolicy,
	},
	FilestackSecurityOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilestackSecurityOptionsKeySpecifier | (() => undefined | FilestackSecurityOptionsKeySpecifier),
		fields?: FilestackSecurityOptionsFieldPolicy,
	},
	FloatFieldValidations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FloatFieldValidationsKeySpecifier | (() => undefined | FloatFieldValidationsKeySpecifier),
		fields?: FloatFieldValidationsFieldPolicy,
	},
	FormSidebarAppElement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FormSidebarAppElementKeySpecifier | (() => undefined | FormSidebarAppElementKeySpecifier),
		fields?: FormSidebarAppElementFieldPolicy,
	},
	GatsbyCloudIntegration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GatsbyCloudIntegrationKeySpecifier | (() => undefined | GatsbyCloudIntegrationKeySpecifier),
		fields?: GatsbyCloudIntegrationFieldPolicy,
	},
	GraphQLRemoteFieldConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GraphQLRemoteFieldConfigKeySpecifier | (() => undefined | GraphQLRemoteFieldConfigKeySpecifier),
		fields?: GraphQLRemoteFieldConfigFieldPolicy,
	},
	GraphQLRemoteSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GraphQLRemoteSourceKeySpecifier | (() => undefined | GraphQLRemoteSourceKeySpecifier),
		fields?: GraphQLRemoteSourceFieldPolicy,
	},
	IApp?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IAppKeySpecifier | (() => undefined | IAppKeySpecifier),
		fields?: IAppFieldPolicy,
	},
	IAppElement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IAppElementKeySpecifier | (() => undefined | IAppElementKeySpecifier),
		fields?: IAppElementFieldPolicy,
	},
	IAssetConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IAssetConfigKeySpecifier | (() => undefined | IAssetConfigKeySpecifier),
		fields?: IAssetConfigFieldPolicy,
	},
	IContentPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IContentPermissionKeySpecifier | (() => undefined | IContentPermissionKeySpecifier),
		fields?: IContentPermissionFieldPolicy,
	},
	IExtension?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IExtensionKeySpecifier | (() => undefined | IExtensionKeySpecifier),
		fields?: IExtensionFieldPolicy,
	},
	IField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IFieldKeySpecifier | (() => undefined | IFieldKeySpecifier),
		fields?: IFieldFieldPolicy,
	},
	IFieldParent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IFieldParentKeySpecifier | (() => undefined | IFieldParentKeySpecifier),
		fields?: IFieldParentFieldPolicy,
	},
	IIntegration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IIntegrationKeySpecifier | (() => undefined | IIntegrationKeySpecifier),
		fields?: IIntegrationFieldPolicy,
	},
	ILocalizableField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ILocalizableFieldKeySpecifier | (() => undefined | ILocalizableFieldKeySpecifier),
		fields?: ILocalizableFieldFieldPolicy,
	},
	IModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IModelKeySpecifier | (() => undefined | IModelKeySpecifier),
		fields?: IModelFieldPolicy,
	},
	IPendingProject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IPendingProjectKeySpecifier | (() => undefined | IPendingProjectKeySpecifier),
		fields?: IPendingProjectFieldPolicy,
	},
	IRemoteFieldConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IRemoteFieldConfigKeySpecifier | (() => undefined | IRemoteFieldConfigKeySpecifier),
		fields?: IRemoteFieldConfigFieldPolicy,
	},
	IRemoteSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IRemoteSourceKeySpecifier | (() => undefined | IRemoteSourceKeySpecifier),
		fields?: IRemoteSourceFieldPolicy,
	},
	IRequireableField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IRequireableFieldKeySpecifier | (() => undefined | IRequireableFieldKeySpecifier),
		fields?: IRequireableFieldFieldPolicy,
	},
	ISchemaMigrationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ISchemaMigrationPayloadKeySpecifier | (() => undefined | ISchemaMigrationPayloadKeySpecifier),
		fields?: ISchemaMigrationPayloadFieldPolicy,
	},
	ISidebarElement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ISidebarElementKeySpecifier | (() => undefined | ISidebarElementKeySpecifier),
		fields?: ISidebarElementFieldPolicy,
	},
	ITemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ITemplateKeySpecifier | (() => undefined | ITemplateKeySpecifier),
		fields?: ITemplateFieldPolicy,
	},
	ITitleableField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ITitleableFieldKeySpecifier | (() => undefined | ITitleableFieldKeySpecifier),
		fields?: ITitleableFieldFieldPolicy,
	},
	IUnionField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IUnionFieldKeySpecifier | (() => undefined | IUnionFieldKeySpecifier),
		fields?: IUnionFieldFieldPolicy,
	},
	IUniqueableField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IUniqueableFieldKeySpecifier | (() => undefined | IUniqueableFieldKeySpecifier),
		fields?: IUniqueableFieldFieldPolicy,
	},
	IUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IUserKeySpecifier | (() => undefined | IUserKeySpecifier),
		fields?: IUserFieldPolicy,
	},
	IViewer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IViewerKeySpecifier | (() => undefined | IViewerKeySpecifier),
		fields?: IViewerFieldPolicy,
	},
	IntFieldValidations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IntFieldValidationsKeySpecifier | (() => undefined | IntFieldValidationsKeySpecifier),
		fields?: IntFieldValidationsFieldPolicy,
	},
	Invite?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InviteKeySpecifier | (() => undefined | InviteKeySpecifier),
		fields?: InviteFieldPolicy,
	},
	LeaveProjectPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeaveProjectPayloadKeySpecifier | (() => undefined | LeaveProjectPayloadKeySpecifier),
		fields?: LeaveProjectPayloadFieldPolicy,
	},
	LeaveTrialPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeaveTrialPayloadKeySpecifier | (() => undefined | LeaveTrialPayloadKeySpecifier),
		fields?: LeaveTrialPayloadFieldPolicy,
	},
	LegacyProject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LegacyProjectKeySpecifier | (() => undefined | LegacyProjectKeySpecifier),
		fields?: LegacyProjectFieldPolicy,
	},
	Lifecycle?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LifecycleKeySpecifier | (() => undefined | LifecycleKeySpecifier),
		fields?: LifecycleFieldPolicy,
	},
	LifecycleStep?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LifecycleStepKeySpecifier | (() => undefined | LifecycleStepKeySpecifier),
		fields?: LifecycleStepFieldPolicy,
	},
	Limit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LimitKeySpecifier | (() => undefined | LimitKeySpecifier),
		fields?: LimitFieldPolicy,
	},
	Locale?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocaleKeySpecifier | (() => undefined | LocaleKeySpecifier),
		fields?: LocaleFieldPolicy,
	},
	ManagementPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ManagementPermissionKeySpecifier | (() => undefined | ManagementPermissionKeySpecifier),
		fields?: ManagementPermissionFieldPolicy,
	},
	MaxComplexityPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MaxComplexityPayloadKeySpecifier | (() => undefined | MaxComplexityPayloadKeySpecifier),
		fields?: MaxComplexityPayloadFieldPolicy,
	},
	Member?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberKeySpecifier | (() => undefined | MemberKeySpecifier),
		fields?: MemberFieldPolicy,
	},
	MemberEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberEdgeKeySpecifier | (() => undefined | MemberEdgeKeySpecifier),
		fields?: MemberEdgeFieldPolicy,
	},
	MembersAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MembersAggregateKeySpecifier | (() => undefined | MembersAggregateKeySpecifier),
		fields?: MembersAggregateFieldPolicy,
	},
	MembersConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MembersConnectionKeySpecifier | (() => undefined | MembersConnectionKeySpecifier),
		fields?: MembersConnectionFieldPolicy,
	},
	MetaInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetaInfoKeySpecifier | (() => undefined | MetaInfoKeySpecifier),
		fields?: MetaInfoFieldPolicy,
	},
	Metrics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetricsKeySpecifier | (() => undefined | MetricsKeySpecifier),
		fields?: MetricsFieldPolicy,
	},
	Migration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MigrationKeySpecifier | (() => undefined | MigrationKeySpecifier),
		fields?: MigrationFieldPolicy,
	},
	Model?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModelKeySpecifier | (() => undefined | ModelKeySpecifier),
		fields?: ModelFieldPolicy,
	},
	ModelViewerContentPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModelViewerContentPermissionKeySpecifier | (() => undefined | ModelViewerContentPermissionKeySpecifier),
		fields?: ModelViewerContentPermissionFieldPolicy,
	},
	ModelViewerPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModelViewerPermissionKeySpecifier | (() => undefined | ModelViewerPermissionKeySpecifier),
		fields?: ModelViewerPermissionFieldPolicy,
	},
	ModelViewerReadContentPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModelViewerReadContentPermissionKeySpecifier | (() => undefined | ModelViewerReadContentPermissionKeySpecifier),
		fields?: ModelViewerReadContentPermissionFieldPolicy,
	},
	ModelViewerReadContentPermissionByStage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModelViewerReadContentPermissionByStageKeySpecifier | (() => undefined | ModelViewerReadContentPermissionByStageKeySpecifier),
		fields?: ModelViewerReadContentPermissionByStageFieldPolicy,
	},
	MoveContentViewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoveContentViewPayloadKeySpecifier | (() => undefined | MoveContentViewPayloadKeySpecifier),
		fields?: MoveContentViewPayloadFieldPolicy,
	},
	MoveFieldPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoveFieldPayloadKeySpecifier | (() => undefined | MoveFieldPayloadKeySpecifier),
		fields?: MoveFieldPayloadFieldPolicy,
	},
	MoveSidebarElementPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoveSidebarElementPayloadKeySpecifier | (() => undefined | MoveSidebarElementPayloadKeySpecifier),
		fields?: MoveSidebarElementPayloadFieldPolicy,
	},
	MoveViewGroupPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoveViewGroupPayloadKeySpecifier | (() => undefined | MoveViewGroupPayloadKeySpecifier),
		fields?: MoveViewGroupPayloadFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	NetlifyIntegration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NetlifyIntegrationKeySpecifier | (() => undefined | NetlifyIntegrationKeySpecifier),
		fields?: NetlifyIntegrationFieldPolicy,
	},
	NetlifyIntegrationCallbackPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NetlifyIntegrationCallbackPayloadKeySpecifier | (() => undefined | NetlifyIntegrationCallbackPayloadKeySpecifier),
		fields?: NetlifyIntegrationCallbackPayloadFieldPolicy,
	},
	NetlifySite?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NetlifySiteKeySpecifier | (() => undefined | NetlifySiteKeySpecifier),
		fields?: NetlifySiteFieldPolicy,
	},
	NetlifyState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NetlifyStateKeySpecifier | (() => undefined | NetlifyStateKeySpecifier),
		fields?: NetlifyStateFieldPolicy,
	},
	OrderBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderByKeySpecifier | (() => undefined | OrderByKeySpecifier),
		fields?: OrderByFieldPolicy,
	},
	PageAppElement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageAppElementKeySpecifier | (() => undefined | PageAppElementKeySpecifier),
		fields?: PageAppElementFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PaymentAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentAccountKeySpecifier | (() => undefined | PaymentAccountKeySpecifier),
		fields?: PaymentAccountFieldPolicy,
	},
	PaymentSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentSubscriptionKeySpecifier | (() => undefined | PaymentSubscriptionKeySpecifier),
		fields?: PaymentSubscriptionFieldPolicy,
	},
	PermanentAuthToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermanentAuthTokenKeySpecifier | (() => undefined | PermanentAuthTokenKeySpecifier),
		fields?: PermanentAuthTokenFieldPolicy,
	},
	PermanentAuthTokenDefaults?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermanentAuthTokenDefaultsKeySpecifier | (() => undefined | PermanentAuthTokenDefaultsKeySpecifier),
		fields?: PermanentAuthTokenDefaultsFieldPolicy,
	},
	Plan?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlanKeySpecifier | (() => undefined | PlanKeySpecifier),
		fields?: PlanFieldPolicy,
	},
	Profile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileKeySpecifier | (() => undefined | ProfileKeySpecifier),
		fields?: ProfileFieldPolicy,
	},
	Progress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgressKeySpecifier | (() => undefined | ProgressKeySpecifier),
		fields?: ProgressFieldPolicy,
	},
	Project?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectKeySpecifier | (() => undefined | ProjectKeySpecifier),
		fields?: ProjectFieldPolicy,
	},
	ProjectChangeCompletedCloning?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectChangeCompletedCloningKeySpecifier | (() => undefined | ProjectChangeCompletedCloningKeySpecifier),
		fields?: ProjectChangeCompletedCloningFieldPolicy,
	},
	PromoteEnvironmentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PromoteEnvironmentPayloadKeySpecifier | (() => undefined | PromoteEnvironmentPayloadKeySpecifier),
		fields?: PromoteEnvironmentPayloadFieldPolicy,
	},
	PublicCloneAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicCloneAccessKeySpecifier | (() => undefined | PublicCloneAccessKeySpecifier),
		fields?: PublicCloneAccessFieldPolicy,
	},
	PublicContentAPI?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicContentAPIKeySpecifier | (() => undefined | PublicContentAPIKeySpecifier),
		fields?: PublicContentAPIFieldPolicy,
	},
	PublicContentAPIDefauts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicContentAPIDefautsKeySpecifier | (() => undefined | PublicContentAPIDefautsKeySpecifier),
		fields?: PublicContentAPIDefautsFieldPolicy,
	},
	PublishContentPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublishContentPermissionKeySpecifier | (() => undefined | PublishContentPermissionKeySpecifier),
		fields?: PublishContentPermissionFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Quota?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QuotaKeySpecifier | (() => undefined | QuotaKeySpecifier),
		fields?: QuotaFieldPolicy,
	},
	RESTRemoteSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RESTRemoteSourceKeySpecifier | (() => undefined | RESTRemoteSourceKeySpecifier),
		fields?: RESTRemoteSourceFieldPolicy,
	},
	ReadContentPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReadContentPermissionKeySpecifier | (() => undefined | ReadContentPermissionKeySpecifier),
		fields?: ReadContentPermissionFieldPolicy,
	},
	ReadVersionContentPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReadVersionContentPermissionKeySpecifier | (() => undefined | ReadVersionContentPermissionKeySpecifier),
		fields?: ReadVersionContentPermissionFieldPolicy,
	},
	Region?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegionKeySpecifier | (() => undefined | RegionKeySpecifier),
		fields?: RegionFieldPolicy,
	},
	RelationalField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RelationalFieldKeySpecifier | (() => undefined | RelationalFieldKeySpecifier),
		fields?: RelationalFieldFieldPolicy,
	},
	RemoteField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoteFieldKeySpecifier | (() => undefined | RemoteFieldKeySpecifier),
		fields?: RemoteFieldFieldPolicy,
	},
	RemoteTypeDefinition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoteTypeDefinitionKeySpecifier | (() => undefined | RemoteTypeDefinitionKeySpecifier),
		fields?: RemoteTypeDefinitionFieldPolicy,
	},
	RemoteTypeDefinitionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoteTypeDefinitionEdgeKeySpecifier | (() => undefined | RemoteTypeDefinitionEdgeKeySpecifier),
		fields?: RemoteTypeDefinitionEdgeFieldPolicy,
	},
	RemoteTypeDefinitionsAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoteTypeDefinitionsAggregateKeySpecifier | (() => undefined | RemoteTypeDefinitionsAggregateKeySpecifier),
		fields?: RemoteTypeDefinitionsAggregateFieldPolicy,
	},
	RemoteTypeDefinitionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoteTypeDefinitionsConnectionKeySpecifier | (() => undefined | RemoteTypeDefinitionsConnectionKeySpecifier),
		fields?: RemoteTypeDefinitionsConnectionFieldPolicy,
	},
	RemoveMemberPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveMemberPayloadKeySpecifier | (() => undefined | RemoveMemberPayloadKeySpecifier),
		fields?: RemoveMemberPayloadFieldPolicy,
	},
	ResetSidebarElementsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetSidebarElementsPayloadKeySpecifier | (() => undefined | ResetSidebarElementsPayloadKeySpecifier),
		fields?: ResetSidebarElementsPayloadFieldPolicy,
	},
	RestRemoteFieldConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RestRemoteFieldConfigKeySpecifier | (() => undefined | RestRemoteFieldConfigKeySpecifier),
		fields?: RestRemoteFieldConfigFieldPolicy,
	},
	RetriggerWebhookPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RetriggerWebhookPayloadKeySpecifier | (() => undefined | RetriggerWebhookPayloadKeySpecifier),
		fields?: RetriggerWebhookPayloadFieldPolicy,
	},
	RevokeInvitePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevokeInvitePayloadKeySpecifier | (() => undefined | RevokeInvitePayloadKeySpecifier),
		fields?: RevokeInvitePayloadFieldPolicy,
	},
	Role?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleKeySpecifier | (() => undefined | RoleKeySpecifier),
		fields?: RoleFieldPolicy,
	},
	SchedulingModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SchedulingModelKeySpecifier | (() => undefined | SchedulingModelKeySpecifier),
		fields?: SchedulingModelFieldPolicy,
	},
	SchemaMigrationSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SchemaMigrationSubscriptionPayloadKeySpecifier | (() => undefined | SchemaMigrationSubscriptionPayloadKeySpecifier),
		fields?: SchemaMigrationSubscriptionPayloadFieldPolicy,
	},
	SchemaMigrationSucceededSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SchemaMigrationSucceededSubscriptionPayloadKeySpecifier | (() => undefined | SchemaMigrationSucceededSubscriptionPayloadKeySpecifier),
		fields?: SchemaMigrationSucceededSubscriptionPayloadFieldPolicy,
	},
	SendInvitePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendInvitePayloadKeySpecifier | (() => undefined | SendInvitePayloadKeySpecifier),
		fields?: SendInvitePayloadFieldPolicy,
	},
	SidebarExtension?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SidebarExtensionKeySpecifier | (() => undefined | SidebarExtensionKeySpecifier),
		fields?: SidebarExtensionFieldPolicy,
	},
	SimpleField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SimpleFieldKeySpecifier | (() => undefined | SimpleFieldKeySpecifier),
		fields?: SimpleFieldFieldPolicy,
	},
	Stage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StageKeySpecifier | (() => undefined | StageKeySpecifier),
		fields?: StageFieldPolicy,
	},
	StageFilestackSecurityOptions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StageFilestackSecurityOptionsKeySpecifier | (() => undefined | StageFilestackSecurityOptionsKeySpecifier),
		fields?: StageFilestackSecurityOptionsFieldPolicy,
	},
	StartTrialPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StartTrialPayloadKeySpecifier | (() => undefined | StartTrialPayloadKeySpecifier),
		fields?: StartTrialPayloadFieldPolicy,
	},
	StarterTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StarterTemplateKeySpecifier | (() => undefined | StarterTemplateKeySpecifier),
		fields?: StarterTemplateFieldPolicy,
	},
	Stats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatsKeySpecifier | (() => undefined | StatsKeySpecifier),
		fields?: StatsFieldPolicy,
	},
	StringFieldValidations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StringFieldValidationsKeySpecifier | (() => undefined | StringFieldValidationsKeySpecifier),
		fields?: StringFieldValidationsFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	SwitchPaymentSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SwitchPaymentSubscriptionPayloadKeySpecifier | (() => undefined | SwitchPaymentSubscriptionPayloadKeySpecifier),
		fields?: SwitchPaymentSubscriptionPayloadFieldPolicy,
	},
	SystemSidebarElement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SystemSidebarElementKeySpecifier | (() => undefined | SystemSidebarElementKeySpecifier),
		fields?: SystemSidebarElementFieldPolicy,
	},
	TechnologyStack?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyStackKeySpecifier | (() => undefined | TechnologyStackKeySpecifier),
		fields?: TechnologyStackFieldPolicy,
	},
	Template?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateKeySpecifier | (() => undefined | TemplateKeySpecifier),
		fields?: TemplateFieldPolicy,
	},
	TemplateResource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateResourceKeySpecifier | (() => undefined | TemplateResourceKeySpecifier),
		fields?: TemplateResourceFieldPolicy,
	},
	TokenViewer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenViewerKeySpecifier | (() => undefined | TokenViewerKeySpecifier),
		fields?: TokenViewerFieldPolicy,
	},
	TrackPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TrackPayloadKeySpecifier | (() => undefined | TrackPayloadKeySpecifier),
		fields?: TrackPayloadFieldPolicy,
	},
	TriggerNetlifyIntegrationBuildPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TriggerNetlifyIntegrationBuildPayloadKeySpecifier | (() => undefined | TriggerNetlifyIntegrationBuildPayloadKeySpecifier),
		fields?: TriggerNetlifyIntegrationBuildPayloadFieldPolicy,
	},
	UniDirectionalRelationalField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UniDirectionalRelationalFieldKeySpecifier | (() => undefined | UniDirectionalRelationalFieldKeySpecifier),
		fields?: UniDirectionalRelationalFieldFieldPolicy,
	},
	Union?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnionKeySpecifier | (() => undefined | UnionKeySpecifier),
		fields?: UnionFieldPolicy,
	},
	UnionField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnionFieldKeySpecifier | (() => undefined | UnionFieldKeySpecifier),
		fields?: UnionFieldFieldPolicy,
	},
	UnpublishContentPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnpublishContentPermissionKeySpecifier | (() => undefined | UnpublishContentPermissionKeySpecifier),
		fields?: UnpublishContentPermissionFieldPolicy,
	},
	UpdateAppInstallationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateAppInstallationPayloadKeySpecifier | (() => undefined | UpdateAppInstallationPayloadKeySpecifier),
		fields?: UpdateAppInstallationPayloadFieldPolicy,
	},
	UpdateAppPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateAppPayloadKeySpecifier | (() => undefined | UpdateAppPayloadKeySpecifier),
		fields?: UpdateAppPayloadFieldPolicy,
	},
	UpdateContentPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateContentPermissionKeySpecifier | (() => undefined | UpdateContentPermissionKeySpecifier),
		fields?: UpdateContentPermissionFieldPolicy,
	},
	UpdateContentPermissionEnabledPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateContentPermissionEnabledPayloadKeySpecifier | (() => undefined | UpdateContentPermissionEnabledPayloadKeySpecifier),
		fields?: UpdateContentPermissionEnabledPayloadFieldPolicy,
	},
	UpdateContentViewPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateContentViewPayloadKeySpecifier | (() => undefined | UpdateContentViewPayloadKeySpecifier),
		fields?: UpdateContentViewPayloadFieldPolicy,
	},
	UpdateCreateContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCreateContentPermissionPayloadKeySpecifier | (() => undefined | UpdateCreateContentPermissionPayloadKeySpecifier),
		fields?: UpdateCreateContentPermissionPayloadFieldPolicy,
	},
	UpdateDeleteContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateDeleteContentPermissionPayloadKeySpecifier | (() => undefined | UpdateDeleteContentPermissionPayloadKeySpecifier),
		fields?: UpdateDeleteContentPermissionPayloadFieldPolicy,
	},
	UpdateEnvironmentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnvironmentPayloadKeySpecifier | (() => undefined | UpdateEnvironmentPayloadKeySpecifier),
		fields?: UpdateEnvironmentPayloadFieldPolicy,
	},
	UpdateFieldExtensionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateFieldExtensionPayloadKeySpecifier | (() => undefined | UpdateFieldExtensionPayloadKeySpecifier),
		fields?: UpdateFieldExtensionPayloadFieldPolicy,
	},
	UpdateFilestackSecurityOptionsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateFilestackSecurityOptionsPayloadKeySpecifier | (() => undefined | UpdateFilestackSecurityOptionsPayloadKeySpecifier),
		fields?: UpdateFilestackSecurityOptionsPayloadFieldPolicy,
	},
	UpdateGatsbyCloudIntegrationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateGatsbyCloudIntegrationPayloadKeySpecifier | (() => undefined | UpdateGatsbyCloudIntegrationPayloadKeySpecifier),
		fields?: UpdateGatsbyCloudIntegrationPayloadFieldPolicy,
	},
	UpdateNetlifyIntegrationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateNetlifyIntegrationPayloadKeySpecifier | (() => undefined | UpdateNetlifyIntegrationPayloadKeySpecifier),
		fields?: UpdateNetlifyIntegrationPayloadFieldPolicy,
	},
	UpdatePermanentAuthTokenPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePermanentAuthTokenPayloadKeySpecifier | (() => undefined | UpdatePermanentAuthTokenPayloadKeySpecifier),
		fields?: UpdatePermanentAuthTokenPayloadFieldPolicy,
	},
	UpdatePublicPermissionsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePublicPermissionsPayloadKeySpecifier | (() => undefined | UpdatePublicPermissionsPayloadKeySpecifier),
		fields?: UpdatePublicPermissionsPayloadFieldPolicy,
	},
	UpdatePublishContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePublishContentPermissionPayloadKeySpecifier | (() => undefined | UpdatePublishContentPermissionPayloadKeySpecifier),
		fields?: UpdatePublishContentPermissionPayloadFieldPolicy,
	},
	UpdateReadContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateReadContentPermissionPayloadKeySpecifier | (() => undefined | UpdateReadContentPermissionPayloadKeySpecifier),
		fields?: UpdateReadContentPermissionPayloadFieldPolicy,
	},
	UpdateReadVersionContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateReadVersionContentPermissionPayloadKeySpecifier | (() => undefined | UpdateReadVersionContentPermissionPayloadKeySpecifier),
		fields?: UpdateReadVersionContentPermissionPayloadFieldPolicy,
	},
	UpdateSidebarElementPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSidebarElementPayloadKeySpecifier | (() => undefined | UpdateSidebarElementPayloadKeySpecifier),
		fields?: UpdateSidebarElementPayloadFieldPolicy,
	},
	UpdateSidebarExtensionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSidebarExtensionPayloadKeySpecifier | (() => undefined | UpdateSidebarExtensionPayloadKeySpecifier),
		fields?: UpdateSidebarExtensionPayloadFieldPolicy,
	},
	UpdateUnpublishContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUnpublishContentPermissionPayloadKeySpecifier | (() => undefined | UpdateUnpublishContentPermissionPayloadKeySpecifier),
		fields?: UpdateUnpublishContentPermissionPayloadFieldPolicy,
	},
	UpdateUpdateContentPermissionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUpdateContentPermissionPayloadKeySpecifier | (() => undefined | UpdateUpdateContentPermissionPayloadKeySpecifier),
		fields?: UpdateUpdateContentPermissionPayloadFieldPolicy,
	},
	UpdateViewGroupPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateViewGroupPayloadKeySpecifier | (() => undefined | UpdateViewGroupPayloadKeySpecifier),
		fields?: UpdateViewGroupPayloadFieldPolicy,
	},
	UpdateWebhookPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateWebhookPayloadKeySpecifier | (() => undefined | UpdateWebhookPayloadKeySpecifier),
		fields?: UpdateWebhookPayloadFieldPolicy,
	},
	UpsertTemplatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpsertTemplatePayloadKeySpecifier | (() => undefined | UpsertTemplatePayloadKeySpecifier),
		fields?: UpsertTemplatePayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserAnalytics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAnalyticsKeySpecifier | (() => undefined | UserAnalyticsKeySpecifier),
		fields?: UserAnalyticsFieldPolicy,
	},
	UserModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserModelKeySpecifier | (() => undefined | UserModelKeySpecifier),
		fields?: UserModelFieldPolicy,
	},
	UserPreferences?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPreferencesKeySpecifier | (() => undefined | UserPreferencesKeySpecifier),
		fields?: UserPreferencesFieldPolicy,
	},
	UserViewer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserViewerKeySpecifier | (() => undefined | UserViewerKeySpecifier),
		fields?: UserViewerFieldPolicy,
	},
	ViewGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ViewGroupKeySpecifier | (() => undefined | ViewGroupKeySpecifier),
		fields?: ViewGroupFieldPolicy,
	},
	Viewer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ViewerKeySpecifier | (() => undefined | ViewerKeySpecifier),
		fields?: ViewerFieldPolicy,
	},
	Webhook?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookKeySpecifier | (() => undefined | WebhookKeySpecifier),
		fields?: WebhookFieldPolicy,
	},
	WebhookLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookLogKeySpecifier | (() => undefined | WebhookLogKeySpecifier),
		fields?: WebhookLogFieldPolicy,
	},
	WebhookLogsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookLogsPayloadKeySpecifier | (() => undefined | WebhookLogsPayloadKeySpecifier),
		fields?: WebhookLogsPayloadFieldPolicy,
	},
	_BookOverLimitAddonUsage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _BookOverLimitAddonUsageKeySpecifier | (() => undefined | _BookOverLimitAddonUsageKeySpecifier),
		fields?: _BookOverLimitAddonUsageFieldPolicy,
	},
	_BookOverLimitPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _BookOverLimitPayloadKeySpecifier | (() => undefined | _BookOverLimitPayloadKeySpecifier),
		fields?: _BookOverLimitPayloadFieldPolicy,
	},
	_DeleteAccountPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _DeleteAccountPayloadKeySpecifier | (() => undefined | _DeleteAccountPayloadKeySpecifier),
		fields?: _DeleteAccountPayloadFieldPolicy,
	},
	_GetUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _GetUserPayloadKeySpecifier | (() => undefined | _GetUserPayloadKeySpecifier),
		fields?: _GetUserPayloadFieldPolicy,
	},
	_OverLimitProject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _OverLimitProjectKeySpecifier | (() => undefined | _OverLimitProjectKeySpecifier),
		fields?: _OverLimitProjectFieldPolicy,
	},
	_OverLimitProjectAddons?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _OverLimitProjectAddonsKeySpecifier | (() => undefined | _OverLimitProjectAddonsKeySpecifier),
		fields?: _OverLimitProjectAddonsFieldPolicy,
	},
	_OverLimitProjectAddonsValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _OverLimitProjectAddonsValuesKeySpecifier | (() => undefined | _OverLimitProjectAddonsValuesKeySpecifier),
		fields?: _OverLimitProjectAddonsValuesFieldPolicy,
	},
	_OverLimitProjectUsage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _OverLimitProjectUsageKeySpecifier | (() => undefined | _OverLimitProjectUsageKeySpecifier),
		fields?: _OverLimitProjectUsageFieldPolicy,
	},
	_ResetContentConfigPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ResetContentConfigPayloadKeySpecifier | (() => undefined | _ResetContentConfigPayloadKeySpecifier),
		fields?: _ResetContentConfigPayloadFieldPolicy,
	},
	_SwitchOwnerPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _SwitchOwnerPayloadKeySpecifier | (() => undefined | _SwitchOwnerPayloadKeySpecifier),
		fields?: _SwitchOwnerPayloadFieldPolicy,
	},
	_UpdatePlanTrialPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _UpdatePlanTrialPayloadKeySpecifier | (() => undefined | _UpdatePlanTrialPayloadKeySpecifier),
		fields?: _UpdatePlanTrialPayloadFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;