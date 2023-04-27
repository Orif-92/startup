import { CourseType } from 'src/interfaces/course.interface';

export interface CourseIntialStateType {
	isLoading: boolean;
	error: string | null | unknown;
}

export interface CourseCreateBodyInterface extends CourseType {
	callback: () => void;
}

export interface ByIdBodyInterface {
	courseId: string;
	callback: () => void;
}