require 'pg'
require 'active_record'

settings = {
    adapter: 'postgresql',
    database: 'covid_app'
}

ActiveRecord::Base.establish_connection(settings)

class Story < ActiveRecord::Base

end
