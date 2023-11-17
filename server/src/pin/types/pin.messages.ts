export enum PinMessages {
  CREATE_SUCCESS = 'Pin created successfully',
  CREATE_SUMMARY = 'Create pin',

  SAVE_SUCCESS = 'Pin saved successfully',
  SAVE_SUMMARY = 'Save pin',
  UNSAVE_SUCCESS = 'Pin unsaved successfully',

  GET_ALL_SUCCESS = 'Get all pins successfully',
  GET_ALL_SUMMARY = 'Get all pins',

  GET_PAGINATION_SUCCESS = 'Get all pins with pagination successfully',
  GET_PAGINATION_SUMMARY = 'Get all pins with pagination',

  GET_ID_SUCCESS = 'Get pin by ID successfully',
  GET_ID_SUMMARY = 'Get pin by ID',

  GET_AUTHOR_SUCCESS = 'Get all pins by author successfully',

  UPDATE_SUCCESS = 'Pin updated successfully',
  UPDATE_SUMMARY = 'Update pin',

  DELETE_SUCCESS = 'Pin deleted successfully',
  DELETE_SUMMARY = 'Delete pin',

  NOT_FOUND = 'Pin not found',
  FORBIDDEN_UPDATE = 'You are not allow to update this pin',
  FORBIDDEN_DELETE = 'You are not allow to delete this pin',
}
