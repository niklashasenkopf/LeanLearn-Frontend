export * from './helloController.service';
import { HelloControllerService } from './helloController.service';
export * from './mcQuestionController.service';
import { McQuestionControllerService } from './mcQuestionController.service';
export const APIS = [HelloControllerService, McQuestionControllerService];
