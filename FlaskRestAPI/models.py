from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class ProductModel(db.Model):
    __tablename__ = 'contratos'
    id = db.Column(db.Integer,primary_key=True)
    Contrato = db.Column(db.Integer)
    dtInicio = db.Column(db.String)

    def __init__(self,Contrato,dtInicio):
        self.Contrato = Contrato
        self.dtInicio = dtInicio
    
    def json(self):
        return{'Contrato':self.Contrato, "dtInicio": self.dtInicio}
    
