#!/usr/bin/node
import getListStudentIds from './1-get_list_student_ids.js';
export default function getStudentIdsSum(list) {
    const res = getListStudentIds(list);
    return res.reduce((acc, val) => acc + val)
}