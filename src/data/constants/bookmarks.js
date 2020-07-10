export const 
	SPACE_PER_PAGE 					= 40,

	//Space
	SPACE_LOAD_REQ 					= 'SPACE_LOAD_REQ',
	SPACE_LOAD_SUCCESS 				= 'SPACE_LOAD_SUCCESS',
	SPACE_LOAD_ERROR 				= 'SPACE_LOAD_ERROR',

	SPACE_REFRESH_REQ 				= 'SPACE_REFRESH_REQ',
	SPACE_ACTUALIZE_REQ 			= 'SPACE_ACTUALIZE_REQ',

	SPACE_NEXTPAGE_REQ 				= 'SPACE_NEXTPAGE_REQ',
	SPACE_NEXTPAGE_SUCCESS 			= 'SPACE_NEXTPAGE_SUCCESS',
	SPACE_NEXTPAGE_ERROR 			= 'SPACE_NEXTPAGE_ERROR',

	SPACE_CHANGE_SORT 				= 'SPACE_CHANGE_SORT',
	SPACE_VIEW_TOGGLE				= 'SPACE_VIEW_TOGGLE',
	SPACE_VIEW_CONFIG				= 'SPACE_VIEW_CONFIG',

	//Single
	BOOKMARK_CREATE_REQ 			= 'BOOKMARK_CREATE_REQ',
	BOOKMARK_CREATE_SUCCESS 		= 'BOOKMARK_CREATE_SUCCESS',
	BOOKMARK_CREATE_ERROR 			= 'BOOKMARK_CREATE_ERROR',

	BOOKMARK_UPLOAD_REQ 			= 'BOOKMARK_UPLOAD_REQ',
	BOOKMARK_UPLOAD_PROGRESS 		= 'BOOKMARK_UPLOAD_PROGRESS',

	BOOKMARK_UPDATE_REQ 			= 'BOOKMARK_UPDATE_REQ',
	BOOKMARK_UPDATE_SUCCESS 		= 'BOOKMARK_UPDATE_SUCCESS',		//item(object/array of object), onSuccess, onFail, +spaceId(number/array), +movedFromSpaceId(number/array)
	BOOKMARK_UPDATE_ERROR 			= 'BOOKMARK_UPDATE_ERROR',

	BOOKMARK_REMOVE_REQ 			= 'BOOKMARK_REMOVE_REQ',
	BOOKMARK_REMOVE_SUCCESS 		= 'BOOKMARK_REMOVE_SUCCESS',		//_id(number/array), +spaceId(number/array)
	BOOKMARK_REMOVE_ERROR	 		= 'BOOKMARK_REMOVE_ERROR',

	BOOKMARK_RECOVER 				= 'BOOKMARK_RECOVER',
	BOOKMARK_IMPORTANT 				= 'BOOKMARK_IMPORTANT',
	BOOKMARK_SCREENSHOT 			= 'BOOKMARK_SCREENSHOT',
	BOOKMARK_REPARSE 				= 'BOOKMARK_REPARSE',
	BOOKMARK_MOVE 					= 'BOOKMARK_MOVE',

	BOOKMARK_REORDER				= 'BOOKMARK_REORDER',

	BOOKMARK_PRELOAD 				= 'BOOKMARK_PRELOAD',

	BOOKMARK_COVER_UPLOAD_REQ		= 'BOOKMARK_COVER_UPLOAD_REQ',

	//Html
	BOOKMARK_HTML_LOAD_REQ			= 'BOOKMARK_HTML_LOAD_REQ',
	BOOKMARK_HTML_LOAD_SUCCESS		= 'BOOKMARK_HTML_LOAD_SUCCESS',
	BOOKMARK_HTML_LOAD_ERROR		= 'BOOKMARK_HTML_LOAD_ERROR',

	//Drafts
	BOOKMARK_DRAFT_LOAD_REQ			= 'BOOKMARK_DRAFT_LOAD_REQ',
	BOOKMARK_DRAFT_LOAD_SUCCESS		= 'BOOKMARK_DRAFT_LOAD_SUCCESS',
	BOOKMARK_DRAFT_LOAD_ERROR		= 'BOOKMARK_DRAFT_LOAD_ERROR',
	BOOKMARK_DRAFT_ENSURE_REQ		= 'BOOKMARK_DRAFT_ENSURE_REQ',
	BOOKMARK_DRAFT_SET_STATUS		= 'BOOKMARK_DRAFT_SET_STATUS',
	BOOKMARK_DRAFT_CHANGE 			= 'BOOKMARK_DRAFT_CHANGE',
	BOOKMARK_DRAFT_COMMIT 			= 'BOOKMARK_DRAFT_COMMIT',

	//Select mode
	SELECT_MODE_ENABLE				= 'SELECT_MODE_ENABLE',
	SELECT_MODE_DISABLE				= 'SELECT_MODE_DISABLE',
	SELECT_MODE_SELECT_BOOKMARK		= 'SELECT_MODE_SELECT_BOOKMARK',
	SELECT_MODE_UNSELECT_BOOKMARK 	= 'SELECT_MODE_UNSELECT_BOOKMARK',
	SELECT_MODE_SELECT_ALL			= 'SELECT_MODE_SELECT_ALL',
	SELECT_MODE_UNSELECT_ALL		= 'SELECT_MODE_UNSELECT_ALL',

	SELECT_MODE_IMPORTANT_SELECTED 	= 'SELECT_MODE_IMPORTANT_SELECTED',
	SELECT_MODE_SCREENSHOT_SELECTED = 'SELECT_MODE_SCREENSHOT_SELECTED',
	SELECT_MODE_REMOVE_SELECTED 	= 'SELECT_MODE_REMOVE_SELECTED',
	SELECT_MODE_APPENDTAGS_SELECTED = 'SELECT_MODE_APPENDTAGS_SELECTED',
	SELECT_MODE_REMOVETAGS_SELECTED = 'SELECT_MODE_REMOVETAGS_SELECTED',
	SELECT_MODE_MOVE_SELECTED 		= 'SELECT_MODE_MOVE_SELECTED',
	SELECT_MODE_REPARSE_SELECTED 	= 'SELECT_MODE_REPARSE_SELECTED',
	SELECT_MODE_FAIL_SELECTED		= 'SELECT_MODE_FAIL_SELECTED'