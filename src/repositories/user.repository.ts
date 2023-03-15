import {inject} from '@loopback/core';
import {SequelizeCrudRepository} from '@loopback/sequelize';
import {DbDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends SequelizeCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(User, dataSource);
  }
}
