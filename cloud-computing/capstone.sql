PGDMP     6    	                z            api %   12.11 (Ubuntu 12.11-0ubuntu0.20.04.1) %   12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16386    api    DATABASE     u   CREATE DATABASE api WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE api;
                postgres    false            �           0    0    DATABASE api    ACL     !   GRANT ALL ON DATABASE api TO me;
                   postgres    false    2974            �            1255    16422    update_modified_column()    FUNCTION     �   CREATE FUNCTION public.update_modified_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = (now())::timestamp(0);
    RETURN NEW;   
END;
$$;
 /   DROP FUNCTION public.update_modified_column();
       public          postgres    false            �            1259    16397    users    TABLE     U  CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50),
    email character varying(50),
    password character varying(100),
    created_at timestamp without time zone DEFAULT (now())::timestamp(0) without time zone,
    updated_at timestamp without time zone DEFAULT (now())::timestamp(0) without time zone
);
    DROP TABLE public.users;
       public         heap    postgres    false            �           0    0    TABLE users    ACL     '   GRANT ALL ON TABLE public.users TO me;
          public          postgres    false    203            �            1259    16395    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    203            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    202            �           0    0    SEQUENCE users_id_seq    ACL     :   GRANT SELECT,USAGE ON SEQUENCE public.users_id_seq TO me;
          public          postgres    false    202                       2604    16400    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            �          0    16397    users 
   TABLE DATA           R   COPY public.users (id, name, email, password, created_at, updated_at) FROM stdin;
    public          postgres    false    203   G       �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 18, true);
          public          postgres    false    202                       2606    16402    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    203                       2620    16423    users update_customer_modtime    TRIGGER     �   CREATE TRIGGER update_customer_modtime BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.update_modified_column();
 6   DROP TRIGGER update_customer_modtime ON public.users;
       public          postgres    false    203    204            �   v  x�m��N�0F�����ο�*6��m*D���А���.�K�<�z{����\����|���{Y�NZ�uj�l@v~�7�/����/������ q�1&�Pp~�Q��Z�m��fQ�J�F*�y:�l��n��C���E��d,�Et��Q��U��+�d!{Pk���vmҲ�~��l^Ǜ�)�'�e1YYܶ�&��@-�����_
�|_��G˨��|d�c�u�<8{	Fb�a�O��j}��-���5u	��̐� :g,�y̢4�,%�z(U�ƻ�H)�^���_���=a�zz��RM�P}$j6v��r�Q��_��5�TS8~9�.��n�~��t�fk�	���s�~�O)�-��&     