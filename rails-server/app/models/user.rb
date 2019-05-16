class User < ApplicationRecord
    has_many :dragons

    has_secure_password
    # Making sure that is password hashed when its persisted

    # def password=(value)
    #     self.password_digest = Bcrypt.hash(value)
    # end

    def auth_token
        JWT.encode({ id: self.id }, '65bc368fbc69306')
    end

    def as_json(*)
        super.except('password_digest')
    end
end