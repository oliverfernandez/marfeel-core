import { loremIpsum } from 'lorem-ipsum';
import { doProvide } from '@oliverfernandez/marfeel-provider';

export function runMarfeel(tenantName) {
	console.log(`Hello! >>>> ${tenantName}`);
	console.log(loremIpsum());
	doProvide();
}