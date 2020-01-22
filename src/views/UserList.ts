import { CollectionView } from './CollectionView';
import { User, UserProps } from '../models/User'
import { UserShow } from '../views/UserShow'

export class UserList extends CollectionView<User, UserProps> {
    renderItem(model: User, parent: Element): void {
        new UserShow(parent, model).render();
    }
}
