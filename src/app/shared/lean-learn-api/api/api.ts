export * from './codingQuestionController.service';
import { CodingQuestionControllerService } from './codingQuestionController.service';
export * from './mcQuestionController.service';
import { McQuestionControllerService } from './mcQuestionController.service';
export const APIS = [CodingQuestionControllerService, McQuestionControllerService];
