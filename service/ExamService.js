import * as BaseRepository from '../repository/BaseRepository.js';
import '../repository/ExamRepository.js';
export function getAllDataExams() {
    return BaseRepository.getDataAllBy();
}