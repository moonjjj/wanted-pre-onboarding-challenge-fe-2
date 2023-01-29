/**
 * 
 * Create - 
 * 할 일을 추가할 수 있습니다. ( 내용없이 추가 불가 )
 *
 * @param {number} t_num 각 할 일의 기본키역할을 합니다. 
 * @param {string} contents 할 일의 내용입니다.
 * @param {Boolean} is_success 할 일의 완료여부입니다. true / false값으로 구분됩니다.
 * @param {string} category 할 일의 카테고리입니다.
 * @param {Array} tags 할 일에 붙는 태그들입니다. 여러개가 태깅될 수 있습니다.
 * @returns {Object} 할 일을 생성합니다.
 */
    function createTodo(t_num, contents, is_success, category, tags) {
      return "할일 생성";
    }
    

/**
 * 
 * Read - 
 * 할 일 리스트를 조회할 수 있습니다.
 *
 * @param {number} t_num 각 할 일의 기본키역할을 합니다. 
 * @param {string} contents 할 일의 내용입니다.
 * @returns {Object} 할 일 리스트를 보여줍니다.
 */
function readListTodo(t_num, contents) {
  return "할일 목록 보기";
}

/**
 * 
 * Read - 
 * 할 일을 상세보기 할 수 있습니다. (id기반)
 *
 * @param {number} t_num 각 할 일의 기본키역할을 합니다. 
 * @param {string} contents 할 일의 내용입니다.
 * @param {Boolean} is_success 할 일의 완료여부입니다.
 * @param {string} category 할 일의 카테고리입니다.
 * @param {Array} tags 할 일에 붙는 태그들입니다. 여러개가 태깅될 수 있습니다.
 * @returns {Object} 할 일 상세를 보여줍니다.
 */
function readDetailTodo(t_num, contents, is_success, category, tags) {
  return "할일 상세 보기";
}

/**
 * 
 * Update - 
 * 할 일을 업데이트 할 수 있습니다. ( id 제외 전부 수정 가능 )
 *
 * @param {number} t_num 각 할 일의 기본키역할을 합니다. 
 * @param {string} contents 할 일의 내용입니다.
 * @param {Boolean} is_success 할 일의 완료여부입니다.
 * @param {string} category 할 일의 카테고리입니다.
 * @returns {Object} 할 일을 수정합니다.
 */
function updateTodo(t_num, contents, is_success, category) {
  return "할일 수정하기";
}

/**
 * Update - 
 * 태그를 수정할 수 있습니다. ( id 제외 전부 수정 가능 )
 * @param {number} t_num 각 할 일의 기본키역할을 합니다. 
 * @param {Array} tags 할 일에 붙는 태그들입니다. 여러개가 태깅될 수 있습니다.
 * @returns {Object} 해당 할 일의 태그를 수정합니다.
 */
function updateTags(t_num, tags) {
  return "해당 할일의 태그 수정하기";
}

/**
 * 
 * Delete - 
 * 할 일을 삭제 할 수 있습니다. ( id 기반 )
 *
 * @param {number} t_num 각 할 일의 기본키역할을 합니다. 
 * @returns {Promise<any>} 할 일을 삭제합니다.
 */
function deleteTodo(t_num) {
  return "할일 삭제 ";
}

/**
 * 
 * Delete - 
 * 모든 할 일을 제거합니다.
 *
 * @returns {Promise<any>} 모든 할 일을 삭제합니다.
 */
function deleteAllTodo() {
  return "할일 전체 삭제하기";
}
/**
 * 
 * Delete - 
 * 특정 할 일의 특정 태그를 삭제할 수 있습니다.
 *
 * @param {number} t_num 각 할 일의 기본키역할을 합니다. 
 * @param {Array} tags 할 일에 붙는 태그들입니다. 여러개가 태깅될 수 있습니다.
 * @returns {Promise<any>} 태그를 삭제합니다.
 */
function deleteTags(t_num, tags) {
  return "특정 할 일의 특정 태그 삭제";
}
/**
 * 
 * Delete - 
 * 특정 할 일의 모든 태그 삭제
 *
 * @param {number} t_num 각 할 일의 기본키역할을 합니다. 
 * @returns {Promise<any>} 모든 태그를 삭제합니다.
 */
function deleteAllTags(t_num) {
  return "모든 태그를 삭제하기";
}